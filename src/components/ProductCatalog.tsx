import ProductCard from "./ProductCard";
import productCamiseta from "@/assets/product-camiseta.jpg";
import productJaqueta from "@/assets/product-jaqueta.jpg";
import productCalca from "@/assets/product-calca.jpg";
import productPolo from "@/assets/product-polo.jpg";
import productMoletom from "@/assets/product-moletom.jpg";
import productBermuda from "@/assets/product-bermuda.jpg";
import productVestido from "@/assets/product-vestido.jpg";
import productTenis from "@/assets/product-tenis.jpg";
import productCamisa from "@/assets/product-camisa.jpg";
import productCinto from "@/assets/product-cinto.jpg";
import productBolsa from "@/assets/product-bolsa.jpg";

const masculino = [
  { image: productPolo, name: "Polo Classic Fit", price: "R$ 159,90", whatsappMessage: "Quero a Polo Classic Fit" },
  { image: productCamiseta, name: "Camiseta Essential", price: "R$ 129,90", whatsappMessage: "Quero a Camiseta Essential" },
  { image: productCamisa, name: "Camisa Oxford", price: "R$ 219,90", whatsappMessage: "Quero a Camisa Oxford" },
  { image: productJaqueta, name: "Jaqueta Jeans", price: "R$ 249,90", oldPrice: "R$ 349,90", tag: "Sale", whatsappMessage: "Quero a Jaqueta Jeans" },
  { image: productCalca, name: "Calça Slim Chino", price: "R$ 199,90", whatsappMessage: "Quero a Calça Slim Chino" },
  { image: productMoletom, name: "Moletom Logo", price: "R$ 279,90", tag: "Novo", whatsappMessage: "Quero o Moletom Logo" },
  { image: productBermuda, name: "Bermuda Chino", price: "R$ 169,90", whatsappMessage: "Quero a Bermuda Chino" },
  { image: productTenis, name: "Tênis Essential", price: "R$ 349,90", whatsappMessage: "Quero o Tênis Essential" },
];

const feminino = [
  { image: productVestido, name: "Vestido Floral", price: "R$ 289,90", tag: "Novo", whatsappMessage: "Quero o Vestido Floral" },
  { image: productBolsa, name: "Bolsa Estruturada", price: "R$ 399,90", whatsappMessage: "Quero a Bolsa Estruturada" },
];

const acessorios = [
  { image: productCinto, name: "Cinto Couro Premium", price: "R$ 149,90", whatsappMessage: "Quero o Cinto Couro Premium" },
];

const ProductCatalog = () => {
  return (
    <div>
      {/* Masculino */}
      <section id="masculino" className="container mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground uppercase tracking-wider">Masculino</h2>
          <div className="h-px flex-1 bg-border ml-6" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {masculino.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>

      {/* Feminino */}
      <section id="feminino" className="container mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground uppercase tracking-wider">Feminino</h2>
          <div className="h-px flex-1 bg-border ml-6" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {feminino.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>

      {/* Acessórios */}
      <section id="acessórios" className="container mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground uppercase tracking-wider">Acessórios</h2>
          <div className="h-px flex-1 bg-border ml-6" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {acessorios.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductCatalog;
