const Footer = () => {
  return (
    <footer className="bg-primary py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex gap-0 mb-2">
              <div className="w-5 h-1 bg-accent" />
              <div className="w-5 h-1 bg-primary-foreground" />
              <div className="w-5 h-1 bg-accent" />
            </div>
            <h3 className="text-primary-foreground font-bold text-lg tracking-[0.15em] uppercase">
              Tommy Style
            </h3>
            <p className="text-primary-foreground/50 text-xs mt-2 leading-relaxed">
              Moda masculina e feminina premium.<br />
              As melhores marcas em um só lugar.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-primary-foreground text-xs font-bold tracking-widest uppercase mb-4">
              Categorias
            </h4>
            <ul className="space-y-2">
              {["Masculino", "Feminino", "Acessórios", "Novidades", "Sale"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-primary-foreground/50 text-xs hover:text-primary-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary-foreground text-xs font-bold tracking-widest uppercase mb-4">
              Localização
            </h4>
            <p className="text-primary-foreground/50 text-xs leading-relaxed">
              Shopping Uberaba<br />
              Av. Filomena Cartafina, 1111<br />
              Uberaba - MG<br /><br />
              (34) 99140-1087
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6">
          <p className="text-primary-foreground/30 text-[10px] text-center tracking-wider uppercase">
            © 2026 Tommy Style - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
