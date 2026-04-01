const brands = [
  { name: "Tommy Hilfiger", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tommy_Hilfiger_logo.svg" },
  { name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" },
  { name: "Adidas", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" },
];

const BrandsSection = () => {
  return (
    <section className="py-14 border-t border-b border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase mb-8">
          Marcas que trabalhamos
        </p>
        <div className="flex items-center justify-center gap-16 flex-wrap">
          {brands.map((brand) => (
            <img
              key={brand.name}
              src={brand.logo}
              alt={brand.name}
              loading="lazy"
              className="h-8 opacity-40 hover:opacity-80 transition-opacity duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
