import { MessageCircle } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  whatsappMessage: string;
}

const ProductCard = ({ image, name, price, whatsappMessage }: ProductCardProps) => {
  const whatsappUrl = `https://wa.me/5534991401087?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-card rounded-lg overflow-hidden group transition-all duration-300 hover:-translate-y-1"
      style={{ boxShadow: 'var(--shadow-card)' }}
      onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)'}
      onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-card)'}
    >
      <div className="overflow-hidden aspect-square">
        <img
          src={image}
          alt={name}
          loading="lazy"
          width={640}
          height={640}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-heading text-lg font-semibold text-foreground">{name}</h3>
        <p className="text-accent font-bold text-xl mt-1 font-body">{price}</p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center justify-center gap-2 bg-accent text-accent-foreground py-2.5 px-4 rounded-md font-medium text-sm transition-opacity hover:opacity-90 font-body"
        >
          <MessageCircle className="h-4 w-4" />
          Comprar
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
