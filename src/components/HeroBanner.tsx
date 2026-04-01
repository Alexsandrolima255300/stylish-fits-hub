import heroBanner from "@/assets/hero-banner.jpg";

const HeroBanner = () => {
  return (
    <section className="relative h-[350px] md:h-[450px] overflow-hidden">
      <img
        src={heroBanner}
        alt="Coleção Nova 2026"
        className="w-full h-full object-cover"
        width={1920}
        height={800}
      />
      <div className="absolute inset-0 bg-primary/50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground font-heading mb-3">
            Coleção Nova 2026
          </h2>
          <p className="text-lg text-primary-foreground/80 font-body">
            Estilo e elegância para todas as ocasiões
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
