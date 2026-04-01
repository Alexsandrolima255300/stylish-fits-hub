import { ShoppingBag } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-primary py-5 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ShoppingBag className="h-7 w-7 text-primary-foreground" />
          <div>
            <h1 className="text-2xl font-bold tracking-wide text-primary-foreground font-heading">
              Tommy Style
            </h1>
            <p className="text-sm text-primary-foreground/70 font-body">
              Moda Masculina e Feminina Premium
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
