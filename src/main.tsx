import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import AdminFixed from './AdminFixed.tsx';
import './index.css';

const style=document.createElement('link');
style.rel='stylesheet';
style.href='/petviva-overrides.css';
document.head.appendChild(style);
const promoStyle=document.createElement('link');
promoStyle.rel='stylesheet';
promoStyle.href='/promo-banner-readability.css';
document.head.appendChild(promoStyle);
const adminStyle=document.createElement('link');
adminStyle.rel='stylesheet';
adminStyle.href='/petviva-admin.css';
document.head.appendChild(adminStyle);

const adminMode=localStorage.getItem('petviva_admin')==='1';
if(!adminMode){
  document.addEventListener('click',(event)=>{
    const target=event.target as HTMLElement|null;
    const button=target?.closest('button');
    if(button && button.textContent?.trim().toLowerCase().includes('acesso administrativo')){
      event.preventDefault();
      event.stopImmediatePropagation();
      localStorage.setItem('petviva_admin','1');
      window.location.reload();
    }
  },true);
}

createRoot(document.getElementById('root')!).render(adminMode?<AdminFixed/>:<App/>);
