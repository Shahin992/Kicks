import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useEffect, useMemo, useState } from 'react';
import GlobalEmptyPage from '@/components/common/GlobalEmptyPage';
import GlobalLoadingPage from '@/components/common/GlobalLoadingPage';
import ProductCard from '@/components/common/ProductCard';

type CarouselProduct = {
  id: number;
  title: string;
  image: string;
  price: number;
};

interface ProductsCarouselSectionProps {
  title?: string;
  products: CarouselProduct[];
  isLoading?: boolean;
  hasError?: boolean;
  errorMessage?: string;
  emptyMessage?: string;
}

const ProductsCarouselSection = ({
  title = 'You may also like',
  products,
  isLoading = false,
  hasError = false,
  errorMessage = 'Failed to load related products.',
  emptyMessage = 'No related products available.',
}: ProductsCarouselSectionProps) => {
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(() => (typeof window !== 'undefined' ? window.innerWidth < 768 : false));
  const pageSize = isMobile ? 2 : 4;
  const maxStartIndex = Math.max(0, products.length - pageSize);
  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex < maxStartIndex;
  const isEmpty = !isLoading && !hasError && products.length === 0;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (startIndex > maxStartIndex) {
      setStartIndex(maxStartIndex);
    }
  }, [maxStartIndex, startIndex]);

  const visibleProducts = useMemo(
    () => products.slice(startIndex, startIndex + pageSize),
    [pageSize, products, startIndex],
  );

  const handlePrevious = () => {
    if (!canGoPrev) {
      return;
    }
    setStartIndex((prev) => Math.max(0, prev - pageSize));
  };

  const handleNext = () => {
    if (!canGoNext) {
      return;
    }
    setStartIndex((prev) => Math.min(maxStartIndex, prev + pageSize));
  };

  return (
    <div className="space-y-3 md:space-y-5">
      <div className="flex items-center justify-between">
        <h2
          className="text-[26px] font-semibold leading-none text-[#232321] md:text-[42px]"
          style={{ fontFamily: 'Rubik, sans-serif' }}
        >
          {title}
        </h2>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={handlePrevious}
            disabled={!canGoPrev}
            className={`flex h-4 w-4 items-center justify-center rounded-[4px] md:h-7 md:w-7 ${
              canGoPrev ? 'bg-[#d4d4d3] text-[#232321]' : 'cursor-not-allowed bg-[#bdbdbc] text-[#7d7d7d]'
            }`}
            aria-label="Previous products"
          >
            <KeyboardArrowLeftIcon sx={{ fontSize: { xs: 10, md: 20 } }} />
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={!canGoNext}
            className={`flex h-4 w-4 items-center justify-center rounded-[4px] md:h-7 md:w-7 ${
              canGoNext ? 'bg-[#232321] text-white' : 'cursor-not-allowed bg-[#7d7d7d] text-[#bdbdbc]'
            }`}
            aria-label="Next products"
          >
            <KeyboardArrowRightIcon sx={{ fontSize: { xs: 10, md: 20 } }} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
        {isLoading
          ? (
            <div className="col-span-2 md:col-span-4">
              <GlobalLoadingPage message="Loading products..." />
            </div>
          )
          : hasError
          ? (
            <div className="col-span-2 md:col-span-4">
              <GlobalEmptyPage message={errorMessage} />
            </div>
          )
          : isEmpty
            ? (
              <div className="col-span-2 md:col-span-4">
                <GlobalEmptyPage message={emptyMessage} />
              </div>
            )
            : visibleProducts.map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            ))}
      </div>
    </div>
  );
};

export default ProductsCarouselSection;
