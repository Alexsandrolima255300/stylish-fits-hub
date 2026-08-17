import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import AdminFixed from './AdminFixed.tsx';
import './index.css';

const styles=['/petviva-overrides.css','/promo-banner-readability.css','/petviva-admin.css','/petmaster-brand-overrides.css'];
styles.forEach(href=>{const link=document.createElement('link');link.rel='stylesheet';link.href=href;document.head.appendChild(link)});

const adminMode=localStorage.getItem('petviva_admin')==='1';
if(!adminMode){
  document.addEventListener('click',(event)=>{
    const target=event.target as HTMLElement|null;
    const button=target?.closest('button');
    if(!button)return;
    const text=button.textContent?.trim().toLowerCase()||'';
    if(text.includes('acesso administrativo')){
      event.preventDefault();event.stopImmediatePropagation();localStorage.setItem('petviva_admin','1');window.location.reload();return;
    }
    if(text.includes('falar com a loja')||text.includes('whatsapp da loja')){
      event.preventDefault();window.open('https://wa.me/553433341608?text=Ol%C3%A1%20PetMaster!%20Vi%20o%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.','_blank','noopener,noreferrer');
    }
  },true);
}

createRoot(document.getElementById('root')!).render(adminMode?<AdminFixed/>:<App/>);
