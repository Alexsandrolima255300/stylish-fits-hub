const brands = [
  { name: "Tommy Hilfiger", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tommy_Hilfiger_logo.svg" },
  { name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" },
  { name: "Adidas", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" },
];

const BrandsSection = () => {
  return (
    <section className="bg-card py-12 mt-4">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold font-heading text-foreground mb-8">
          Trabalhamos com Marcas
        </h2>
        <div className="flex items-center justify-center gap-12 flex-wrap">
          {brands.map((brand) => (
            <img
              key={brand.name}
              src={brand.logo}
              alt={brand.name}
              loading="lazy"
              className="h-12 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
