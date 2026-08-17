(() => {
  const BRAND = 'PetMaster';
  const PHONE = '553433341608';
  const ADDRESS = 'Av. Nossa Senhora do Desterro, 1790 - Jardim Elza Amui I, Uberaba - MG, 38082-350';
  const style = document.createElement('style');
  style.textContent = `
    :root{--petmaster-blue:#10243f;--petmaster-gold:#f5c542;--petmaster-cream:#fbf8f0}
    body{background:var(--petmaster-cream)}
    .site-shell{background:var(--petmaster-cream)}
    .site-header,.footer{border-color:rgba(16,36,63,.12)!important}
    .brand{color:var(--petmaster-blue)!important;font-weight:800!important}
    .brand em{color:var(--petmaster-gold)!important;font-style:normal!important}
    .brand span{color:var(--petmaster-gold)!important}
    .primary,.add-btn,.quick-view{background:var(--petmaster-blue)!important;color:#fff!important}
    .secondary,.link-btn{color:var(--petmaster-blue)!important;border-color:var(--petmaster-blue)!important}
    .eyebrow,.product-category{color:var(--petmaster-blue)!important}
    .sale-badge{background:var(--petmaster-gold)!important;color:var(--petmaster-blue)!important}
    .hero strong{color:var(--petmaster-blue)!important}
    .hero-orb{background:radial-gradient(circle,#f5c542 0%,rgba(245,197,66,.25) 45%,transparent 72%)!important}
    .promo-banner{background:linear-gradient(135deg,#10243f,#18375f)!important;color:#fff!important}
    .promo-banner h2,.promo-banner p,.promo-banner .eyebrow{color:#fff!important}
    .light-btn{background:var(--petmaster-gold)!important;color:var(--petmaster-blue)!important}
    .benefit span{color:var(--petmaster-blue)!important}
    .category-strip button.active{background:var(--petmaster-blue)!important;color:#fff!important}
    .product-card{border-color:rgba(16,36,63,.12)!important}
    .footer{background:var(--petmaster-blue)!important;color:#fff!important}
    .footer h4,.footer span,.footer p,.footer button,.footer .brand{color:#fff!important}
    .footer .brand em{color:var(--petmaster-gold)!important}
    .footer-bottom button{color:var(--petmaster-gold)!important}
    .admin-sidebar,.pv-side{background:var(--petmaster-blue)!important}
    .admin-brand,.pv-brand{color:#fff!important}
    .admin-brand em,.pv-brand small{color:var(--petmaster-gold)!important}
    .pv-side nav button.active{background:var(--petmaster-gold)!important;color:var(--petmaster-blue)!important}
  `;
  document.head.appendChild(style);

  function setBrand(el){
    if(!el) return;
    const span=el.querySelector(':scope > span');
    el.innerHTML='';
    if(span){span.textContent='🐾';el.appendChild(span)}else{const s=document.createElement('span');s.textContent='🐾';el.appendChild(s)}
    const text=document.createElement('span');
    text.className='petmaster-wordmark';
    text.innerHTML='<b>Pet</b><em>Master</em>';
    el.appendChild(text);
  }

  function apply(){
    document.querySelectorAll('.brand').forEach(setBrand);
    document.querySelectorAll('.admin-brand').forEach(setBrand);
    document.querySelectorAll('.pv-brand').forEach(el=>{
      const b=el.querySelector('b');
      if(b)b.textContent='PetMaster';
    });
    document.querySelectorAll('.footer-bottom span').forEach(el=>{el.textContent='© 2026 PetMaster • Todos os direitos reservados'});
    document.querySelectorAll('.footer-brand p').forEach(el=>{el.textContent='Pet shop, banho e tosa, clínica veterinária, rações, acessórios e cuidados para o seu pet.'});
    document.querySelectorAll('.footer-main > div').forEach(block=>{
      const text=block.textContent||'';
      if(text.includes('Uberaba - MG')){
        block.querySelectorAll('span').forEach((s,i)=>{if(i===0)s.textContent=ADDRESS;if(i===2)s.textContent='WhatsApp: (34) 3334-1608'});
      }
    });
    document.querySelectorAll('button').forEach(btn=>{
      const text=(btn.textContent||'').trim().toLowerCase();
      if(text.includes('falar com a loja')||text.includes('whatsapp da loja')){
        btn.onclick=()=>window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent('Olá! Conheci a PetMaster pelo site e gostaria de mais informações.')}`,'_blank','noopener,noreferrer');
      }
    });
    document.title='PetMaster — Pet Shop Nossa Senhora do Desterro';
    const meta=document.querySelector('meta[name="description"]');
    if(meta)meta.setAttribute('content','PetMaster — Pet Shop Nossa Senhora do Desterro em Uberaba. Banho e tosa, clínica veterinária, rações, acessórios, medicamentos, vacinas e entregas.');
  }

  const observer=new MutationObserver(apply);
  observer.observe(document.documentElement,{childList:true,subtree:true});
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply);else apply();
})();
