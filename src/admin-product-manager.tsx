import React, { useEffect, useRef, useState } from 'react';

/**
 * Product manager for the PetVida admin area.
 *
 * Expected Supabase table (public.products):
 * id, name, description, price, image_url, category, stock, active, created_at
 *
 * Expected Supabase storage bucket: product-images (public bucket).
 * The component accepts a Supabase client through props so it can use the
 * project's existing authentication/database setup without changing the shop.
 */
export default function AdminProductManager({ supabase }: { supabase: any }) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [editing, setEditing] = useState<any | null>(null);
  const [message, setMessage] = useState('');

  const empty = { name: '', description: '', price: '', category: 'Cães', stock: 0, active: true, image_url: '' };
  const [form, setForm] = useState<any>(empty);

  async function loadProducts() {
    setLoading(true);
    const { data, error } = await supabase.from('products').select('*').order('created_at', { ascending: false });
    if (error) setMessage(`Não foi possível carregar os produtos: ${error.message}`);
    else setProducts(data || []);
    setLoading(false);
  }

  useEffect(() => { loadProducts(); }, []);

  function startEdit(product: any) {
    setEditing(product);
    setForm({ ...empty, ...product, price: product.price ?? '' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function startNew() {
    setEditing(null);
    setForm(empty);
    setMessage('');
  }

  async function uploadPhoto(file: File) {
    if (!file) return;
    if (!file.type.startsWith('image/')) return setMessage('Escolha uma imagem JPG, PNG ou WebP.');
    if (file.size > 5 * 1024 * 1024) return setMessage('A imagem deve ter no máximo 5 MB.');
    setUploading(true);
    setMessage('Enviando foto...');
    const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg';
    const id = editing?.id || crypto.randomUUID();
    const path = `${id}-${Date.now()}.${ext}`;
    const { error } = await supabase.storage.from('product-images').upload(path, file, { upsert: true, contentType: file.type });
    if (error) {
      setMessage(`Erro no upload: ${error.message}. Verifique se o bucket product-images existe e permite upload para administradores.`);
    } else {
      const { data } = supabase.storage.from('product-images').getPublicUrl(path);
      setForm((f: any) => ({ ...f, image_url: data.publicUrl }));
      setMessage('Foto enviada com sucesso.');
    }
    setUploading(false);
  }

  async function saveProduct(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim()) return setMessage('Informe o nome do produto.');
    const price = Number(String(form.price).replace(',', '.'));
    if (!Number.isFinite(price) || price < 0) return setMessage('Informe um preço válido.');
    setSaving(true);
    setMessage('Salvando produto...');
    const payload = { name: form.name.trim(), description: form.description || null, price, category: form.category || null, stock: Number(form.stock) || 0, active: !!form.active, image_url: form.image_url || null };
    const result = editing
      ? await supabase.from('products').update(payload).eq('id', editing.id).select().single()
      : await supabase.from('products').insert(payload).select().single();
    if (result.error) setMessage(`Erro ao salvar: ${result.error.message}`);
    else { setMessage(editing ? 'Produto atualizado com sucesso.' : 'Produto adicionado com sucesso.'); startNew(); await loadProducts(); }
    setSaving(false);
  }

  async function removeProduct(id: string) {
    if (!window.confirm('Excluir este produto da loja?')) return;
    const { error } = await supabase.from('products').delete().eq('id', id);
    if (error) setMessage(`Erro ao excluir: ${error.message}`);
    else { setMessage('Produto excluído.'); await loadProducts(); }
  }

  async function toggleActive(p: any) {
    const { error } = await supabase.from('products').update({ active: !p.active }).eq('id', p.id);
    if (error) setMessage(`Erro: ${error.message}`); else loadProducts();
  }

  return <section className="admin-products-manager">
    <div className="admin-products-head">
      <div><h2>Produtos</h2><p>Adicione produtos, altere preços, estoque e fotos da loja.</p></div>
      <button type="button" onClick={startNew}>+ Novo produto</button>
    </div>

    {message && <div className="admin-product-message">{message}</div>}

    <form className="admin-product-form" onSubmit={saveProduct}>
      <div className="admin-product-image-field">
        <div className="admin-product-preview">{form.image_url ? <img src={form.image_url} alt="Prévia do produto" /> : <span>📷</span>}</div>
        <button type="button" disabled={uploading} onClick={() => fileRef.current?.click()}>{uploading ? 'Enviando...' : 'Escolher foto'}</button>
        <input ref={fileRef} hidden type="file" accept="image/jpeg,image/png,image/webp" onChange={e => e.target.files?.[0] && uploadPhoto(e.target.files[0])} />
      </div>
      <div className="admin-product-fields">
        <label>Nome<input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Ex.: Ração Premium" /></label>
        <label>Preço (R$)<input inputMode="decimal" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} placeholder="0,00" /></label>
        <label>Categoria<select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}><option>Cães</option><option>Gatos</option><option>Pássaros</option><option>Peixes</option><option>Roedores</option><option>Higiene</option><option>Acessórios</option></select></label>
        <label>Estoque<input type="number" min="0" value={form.stock} onChange={e => setForm({ ...form, stock: e.target.value })} /></label>
        <label className="wide">Descrição<textarea rows={3} value={form.description || ''} onChange={e => setForm({ ...form, description: e.target.value })} /></label>
        <label className="admin-product-active"><input type="checkbox" checked={!!form.active} onChange={e => setForm({ ...form, active: e.target.checked })} /> Produto visível na loja</label>
        <div className="admin-product-actions"><button type="submit" disabled={saving || uploading}>{saving ? 'Salvando...' : editing ? 'Salvar alterações' : 'Adicionar produto'}</button>{editing && <button type="button" onClick={startNew}>Cancelar</button>}</div>
      </div>
    </form>

    <div className="admin-product-list">
      {loading ? <p>Carregando produtos...</p> : products.length === 0 ? <p>Nenhum produto cadastrado.</p> : products.map(p => <article className="admin-product-row" key={p.id}>
        <div className="admin-product-thumb">{p.image_url ? <img src={p.image_url} alt={p.name} /> : <span>📷</span>}</div>
        <div className="admin-product-info"><strong>{p.name}</strong><small>{p.category || 'Sem categoria'} · estoque: {p.stock ?? 0}</small></div>
        <strong className="admin-product-price">R$ {Number(p.price || 0).toFixed(2).replace('.', ',')}</strong>
        <button type="button" onClick={() => startEdit(p)}>Editar</button>
        <button type="button" onClick={() => toggleActive(p)}>{p.active ? 'Ocultar' : 'Ativar'}</button>
        <button type="button" onClick={() => removeProduct(p.id)}>Excluir</button>
      </article>)}
    </div>
  </section>;
}
