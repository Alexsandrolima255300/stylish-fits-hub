import { createRoot } from 'react-dom/client';
import { Component, type ReactNode } from 'react';
import './index.css';

const styles = ['/petviva-overrides.css','/promo-banner-readability.css','/petviva-admin.css','/petmaster-brand-overrides.css'];
styles.forEach(href => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
});

function ensureStorage(){
  try {
    const storage = window.localStorage;
    const probe = '__petvida_storage_probe__';
    storage.setItem(probe, '1');
    storage.removeItem(probe);
    return storage;
  } catch {
    const memory: Record<string,string> = {};
    const fallback = {
      getItem: (key:string) => Object.prototype.hasOwnProperty.call(memory,key) ? memory[key] : null,
      setItem: (key:string,value:string) => { memory[key] = String(value); },
      removeItem: (key:string) => { delete memory[key]; },
      clear: () => { Object.keys(memory).forEach(key => delete memory[key]); },
      key: (index:number) => Object.keys(memory)[index] ?? null,
      get length(){ return Object.keys(memory).length; }
    };
    try { Object.defineProperty(window, 'localStorage', { value: fallback, configurable: true }); } catch {}
    return fallback;
  }
}

ensureStorage();

class StartupBoundary extends Component<{children:ReactNode},{error:boolean}> {
  state = { error:false };
  static getDerivedStateFromError(){ return { error:true }; }
  render(){
    if(this.state.error){
      return <div style={{minHeight:'100vh',display:'grid',placeItems:'center',padding:24,fontFamily:'Inter,system-ui,sans-serif',background:'#fffaf5',color:'#10243f'}}>
        <div style={{maxWidth:520,textAlign:'center',background:'#fff',padding:32,borderRadius:24,boxShadow:'0 20px 60px rgba(16,36,63,.12)'}}>
          <div style={{fontSize:48,marginBottom:12}}>🐾</div>
          <h1 style={{margin:'0 0 10px',fontSize:28}}>PetMaster</h1>
          <p style={{margin:'0 0 20px',lineHeight:1.6,color:'#5f6875'}}>Não foi possível carregar a loja. Atualize a página para tentar novamente.</p>
          <button onClick={()=>window.location.reload()} style={{border:0,borderRadius:12,padding:'12px 20px',background:'#10243f',color:'#fff',fontWeight:700,cursor:'pointer'}}>Atualizar página</button>
        </div>
      </div>;
    }
    return this.props.children;
  }
}

async function start(){
  const root = createRoot(document.getElementById('root')!);
  try {
    const adminMode = window.localStorage.getItem('petviva_admin') === '1';

    if(adminMode){
      const { default: AdminFixed } = await import('./AdminFixed.tsx');
      root.render(<StartupBoundary><AdminFixed/></StartupBoundary>);
      return;
    }

    const { default: App } = await import('./App.tsx');

    document.addEventListener('click',(event)=>{
      const target = event.target as HTMLElement|null;
      const button = target?.closest('button');
      if(!button) return;
      const text = button.textContent?.trim().toLowerCase() || '';
      if(text.includes('acesso administrativo')){
        event.preventDefault();
        event.stopImmediatePropagation();
        window.localStorage.setItem('petviva_admin','1');
        window.location.reload();
        return;
      }
      if(text.includes('falar com a loja') || text.includes('whatsapp da loja')){
        event.preventDefault();
        window.open('https://wa.me/553433341608?text=Ol%C3%A1%20PetMaster!%20Vi%20o%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.','_blank','noopener,noreferrer');
      }
    }, true);

    root.render(<StartupBoundary><App/></StartupBoundary>);
  } catch (error) {
    console.error('PetMaster startup error', error);
    root.render(<StartupBoundary><div /></StartupBoundary>);
  }
}

start();
