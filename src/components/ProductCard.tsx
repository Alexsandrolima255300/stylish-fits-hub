import { MessageCircle } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  oldPrice?: string;
  whatsappMessage: string;
  tag?: string;
}

const ProductCard = ({ image, name, price, oldPrice, whatsappMessage, tag }: ProductCardProps) => {
  const whatsappUrl = `https://wa.me/5534991401087?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden bg-secondary aspect-[3/4] mb-3">
        {tag && (
          <span className="absolute top-3 left-3 z-10 bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider px-2 py-1">
            {tag}
          </span>
        )}
        <img
          src={image}
          alt={name}
          loading="lazy"
          width={640}
          height={640}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-0 left-0 right-0 bg-primary text-primary-foreground py-3 text-center text-xs font-bold uppercase tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          Comprar via WhatsApp
        </a>
      </div>
      <h3 className="text-sm font-medium text-foreground">{name}</h3>
      <div className="flex items-center gap-2 mt-1">
        {oldPrice && (
          <span className="text-sm text-muted-foreground line-through">{oldPrice}</span>
        )}
        <span className="text-sm font-semibold text-foreground">{price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
