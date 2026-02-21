import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { useEffect, useMemo, useState } from 'react';
import GlobalEmptyPage from '@/components/common/GlobalEmptyPage';
import GlobalLoadingPage from '@/components/common/GlobalLoadingPage';
import { useCategoriesQueryState } from '@/features/categories/categoriesApi';

const CATEGORY_FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=80';

const CategoriesSection = () => {
  const { data: categories, isInitialLoading, hasError } = useCategoriesQueryState();
  const [startIndex, setStartIndex] = useState(0);
  const [failedImageIds, setFailedImageIds] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(() => (typeof window !== 'undefined' ? window.innerWidth < 768 : false));
  const visibleCount = isMobile ? 1 : 2;
  const maxStartIndex = Math.max(0, categories.length - visibleCount);
  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex < maxStartIndex;

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

  const visibleCategories = useMemo(() => {
    return categories.slice(startIndex, startIndex + visibleCount);
  }, [categories, startIndex, visibleCount]);
  const isEmpty = !isInitialLoading && !hasError && visibleCategories.length === 0;

  const handlePrevious = () => {
    if (!canGoPrev) {
      return;
    }
    setStartIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (!canGoNext) {
      return;
    }
    setStartIndex((prev) => prev + 1);
  };

  return (
    <section className="overflow-hidden bg-[#202020] p-3 md:p-0">
      <div className="flex items-center justify-between px-2 py-3 md:px-14 md:py-12">
        <h2
          className="text-[40px] font-semibold leading-none tracking-tight text-[#f3f3f3] md:text-[72px] md:font-extrabold md:uppercase"
          style={{ fontFamily: 'Rubik, sans-serif' }}
        >
          Categories
        </h2>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            aria-label="Previous categories"
            onClick={handlePrevious}
            disabled={!canGoPrev}
            className={`flex h-10 w-10 items-center justify-center rounded-[10px] md:h-10 md:w-10 ${
              canGoPrev ? 'bg-[#f1f1f1] text-[#222222]' : 'cursor-not-allowed bg-[#8d8d8d] text-[#5d5d5d]'
            }`}
          >
            <ChevronLeftIcon sx={{ fontSize: { xs: 18, md: 22 } }} />
          </button>
          <button
            type="button"
            aria-label="Next categories"
            onClick={handleNext}
            disabled={!canGoNext}
            className={`flex h-10 w-10 items-center justify-center rounded-[10px] md:h-10 md:w-10 ${
              canGoNext ? 'bg-[#f1f1f1] text-[#222222]' : 'cursor-not-allowed bg-[#8d8d8d] text-[#5d5d5d]'
            }`}
          >
            <ChevronRightIcon sx={{ fontSize: { xs: 18, md: 22 } }} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 border border-[#2f2f2f] md:grid-cols-2 md:border-x-0 md:border-b-0 md:border-t md:pl-14">
        {isInitialLoading
          ? (
            <article className="col-span-1 md:col-span-2">
              <GlobalLoadingPage message="Loading categories..." />
            </article>
          )
          : hasError
            ? (
              <article className="col-span-1 md:col-span-2">
                <GlobalEmptyPage message="Failed to load categories." />
              </article>
            )
            : isEmpty
              ? (
                <article className="col-span-1 md:col-span-2">
                  <GlobalEmptyPage message="No categories available." />
                </article>
              )
              : visibleCategories.map((category, index) => (
          <article
            key={category.id}
            className={`relative flex min-h-[300px] flex-col bg-[#d4d6d9] p-4 pb-4 md:min-h-[600px] md:p-10 md:pb-8 ${
              !isMobile && index === 0
                ? 'rounded-t-[26px] border-b border-[#b8bcc1] md:rounded-none md:rounded-tl-[56px] md:border-b-0 md:border-r md:border-[#c7c9cd]'
                : ''
            }`}
          >
            <div className="flex h-[250px] items-center justify-center md:h-[430px]">
              <img
                src={failedImageIds.includes(category.id) ? CATEGORY_FALLBACK_IMAGE : category.image}
                alt={category.name}
                className="h-full w-full object-contain"
                onError={() => {
                  setFailedImageIds((prev) => (prev.includes(category.id) ? prev : [...prev, category.id]));
                }}
              />
            </div>

            <div className="mt-3 flex items-end justify-between md:mt-10">
              <h3
                className="h-[52px] max-w-[170px] overflow-hidden text-[24px] font-bold leading-[1.06] tracking-tight text-[#232321] md:h-[106px] md:max-w-[310px] md:text-[56px] md:font-extrabold md:uppercase md:leading-[0.94]"
                style={{ fontFamily: 'Rubik, sans-serif' }}
              >
                {category.name}
              </h3>

              <button
                type="button"
                aria-label={`Open ${category.name}`}
                className="mb-1 flex h-10 w-10 items-center justify-center rounded-[8px] bg-[#232321] text-[#f3f3f3] md:mb-0 md:h-14 md:w-14 md:rounded-[10px]"
              >
                <NorthEastIcon sx={{ fontSize: { xs: 18, md: 26 } }} />
              </button>
            </div>
          </article>
            ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
