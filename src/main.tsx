import { createRoot } from 'react-dom/client';
import { Component, type ReactNode } from 'react';
import './index.css';

const styles = ['/petviva-overrides.css','/promo-banner-readability.css','/petviva-admin.css','/petmaster-brand-overrides.css'];
styles.forEach((href) => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
});

document.title = 'PetMaster | Pet Shop Nossa Senhora do Desterro';

class StartupBoundary extends Component<{children: ReactNode}, {error: boolean}> {
  state = { error: false };
  static getDerivedStateFromError() { return { error: true }; }
  render() {
    if (this.state.error) {
      return <div style={{minHeight:'100vh',display:'grid',placeItems:'center',padding:24,fontFamily:'Inter,system-ui,sans-serif',background:'#fffaf5',color:'#10243f'}}>
        <div style={{maxWidth:520,textAlign:'center',background:'#fff',padding:32,borderRadius:24,boxShadow:'0 20px 60px rgba(16,36,63,.12)'}}>
          <div style={{fontSize:48,marginBottom:12}}>🐾</div>
          <h1 style={{margin:'0 0 10px',fontSize:28}}>PetMaster</h1>
          <p style={{margin:'0 0 20px',lineHeight:1.6,color:'#5f6875'}}>Não foi possível carregar a loja. Atualize a página para tentar novamente.</p>
          <button onClick={() => window.location.reload()} style={{border:0,borderRadius:12,padding:'12px 20px',background:'#10243f',color:'#fff',fontWeight:700,cursor:'pointer'}}>Atualizar página</button>
        </div>
      </div>;
    }
    return this.props.children;
  }
}

async function start() {
  const element = document.getElementById('root');
  if (!element) return;
  const root = createRoot(element);
  try {
    const { default: App } = await import('./App.tsx');
    root.render(<StartupBoundary><App /></StartupBoundary>);
  } catch (error) {
    console.error('PetMaster startup error', error);
    root.render(<StartupBoundary><div /></StartupBoundary>);
  }
}

start();
