import HeroSection from '@/components/home/HeroSection';
import ProductsSection from '@/components/home/ProductsSection';

const HomePage = () => {
  return (
    <div className="py-8 md:py-12">
      <HeroSection />
      <ProductsSection />
    </div>
  );
};

export default HomePage;
