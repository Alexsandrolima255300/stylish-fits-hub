import { MapPin, Clock, Phone } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-foreground uppercase tracking-wider text-center mb-10">
          Nossa Loja
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
          {/* Map embed */}
          <div className="w-full h-[300px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.517!2d-47.9318!3d-19.7476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0aba5a5a5a5%3A0x1234567890!2sShopping+Uberaba!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Tommy Style - Shopping Uberaba"
            />
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-foreground text-sm uppercase tracking-wider mb-1">Endereço</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Shopping Uberaba<br />
                  Av. Filomena Cartafina, 1111<br />
                  Uberaba - MG
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-foreground text-sm uppercase tracking-wider mb-1">Horário</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Seg a Sáb: 10h às 22h<br />
                  Dom e Feriados: 14h às 20h
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-foreground text-sm uppercase tracking-wider mb-1">Contato</h3>
                <p className="text-muted-foreground text-sm">
                  (34) 99140-1087
                </p>
                <a
                  href="https://wa.me/5534991401087?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 bg-accent text-accent-foreground px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-accent/90 transition-colors"
                >
                  Fale Conosco
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
