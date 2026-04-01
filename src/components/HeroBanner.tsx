import heroBanner from "@/assets/hero-banner-new.jpg";

const HeroBanner = () => {
  return (
    <section className="relative h-[400px] md:h-[520px] overflow-hidden">
      <img
        src={heroBanner}
        alt="Coleção Nova 2026 Tommy Style"
        className="w-full h-full object-cover"
        width={1920}
        height={800}
      />
      <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
        <div className="text-center px-4">
          <p className="text-primary-foreground/80 text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Nova Coleção
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-primary-foreground uppercase tracking-wider mb-4">
            Outono/Inverno 2026
          </h2>
          <p className="text-primary-foreground/80 text-base md:text-lg mb-6">
            Estilo clássico americano com atitude moderna
          </p>
          <a
            href="https://wa.me/5534991401087?text=Quero%20ver%20a%20cole%C3%A7%C3%A3o%20nova"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-accent/90 transition-colors"
          >
            Ver Coleção
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
