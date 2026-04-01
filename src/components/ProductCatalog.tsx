import ProductCard from "./ProductCard";
import productCamiseta from "@/assets/product-camiseta.jpg";
import productJaqueta from "@/assets/product-jaqueta.jpg";
import productCalca from "@/assets/product-calca.jpg";
import productPolo from "@/assets/product-polo.jpg";

const products = [
  {
    image: productCamiseta,
    name: "Camiseta Premium",
    price: "R$ 129,90",
    whatsappMessage: "Quero essa camiseta",
  },
  {
    image: productJaqueta,
    name: "Jaqueta Jeans",
    price: "R$ 249,90",
    whatsappMessage: "Quero essa jaqueta",
  },
  {
    image: productCalca,
    name: "Calça Slim",
    price: "R$ 199,90",
    whatsappMessage: "Quero essa calça",
  },
  {
    image: productPolo,
    name: "Polo Premium",
    price: "R$ 159,90",
    whatsappMessage: "Quero essa polo",
  },
];

const ProductCatalog = () => {
  return (
    <section className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold font-heading text-foreground mb-8">Catálogo</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductCatalog;
