import { Menu, Search, Heart, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

const navLinks = ["Masculino", "Feminino", "Acessórios", "Novidades", "Sale"];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-accent text-accent-foreground text-xs py-2 text-center font-medium tracking-wide">
        FRETE GRÁTIS para Uberaba • Compre pelo WhatsApp
      </div>

      {/* Main nav */}
      <header className="bg-primary sticky top-0 z-40">
        <div className="container mx-auto px-4 flex items-center justify-between h-14">
          {/* Left */}
          <div className="flex items-center gap-3">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-primary-foreground lg:hidden">
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <Search className="h-5 w-5 text-primary-foreground/70 cursor-pointer" />
          </div>

          {/* Logo - Tommy flag style */}
          <div className="flex flex-col items-center">
            <div className="flex gap-0 mb-0.5">
              <div className="w-6 h-1.5 bg-accent" />
              <div className="w-6 h-1.5 bg-primary-foreground" />
              <div className="w-6 h-1.5 bg-accent" />
            </div>
            <span className="text-primary-foreground text-lg font-bold tracking-[0.2em] uppercase">
              Tommy Style
            </span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <Heart className="h-5 w-5 text-primary-foreground/70 cursor-pointer" />
            <ShoppingBag className="h-5 w-5 text-primary-foreground/70 cursor-pointer" />
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex justify-center gap-8 pb-3">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-primary-foreground/80 text-xs font-semibold tracking-widest uppercase hover:text-primary-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="lg:hidden bg-primary border-t border-primary-foreground/10 pb-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-3 text-primary-foreground/80 text-sm font-semibold tracking-widest uppercase hover:text-primary-foreground hover:bg-primary-foreground/5 transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
