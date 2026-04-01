import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import ProductCatalog from "@/components/ProductCatalog";
import BrandsSection from "@/components/BrandsSection";
import LocationSection from "@/components/LocationSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroBanner />
      <ProductCatalog />
      <BrandsSection />
      <LocationSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
