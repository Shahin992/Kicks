import HeroSection from '@/components/home/HeroSection';
import ProductsSection from '@/components/home/ProductsSection';
import CategoriesSection from '@/components/home/CategoriesSection';
import ReviewsSection from '@/components/home/ReviewsSection';

const HomePage = () => {
  return (
    <div className="py-8 md:py-12">
      <HeroSection />
      <ProductsSection />
      <CategoriesSection />
      <ReviewsSection />
    </div>
  );
};

export default HomePage;
