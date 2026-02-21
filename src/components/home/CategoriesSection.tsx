import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import NorthEastIcon from '@mui/icons-material/NorthEast';

type CategoryItem = {
  id: number;
  title: string;
  image: string;
};

const categories: CategoryItem[] = [
  {
    id: 1,
    title: 'Lifestyle Shoes',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'Basketball Shoes',
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=1200&q=80',
  },
];

const CategoriesSection = () => {
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
            className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#8d8d8d] text-[#222222] md:h-10 md:w-10"
          >
            <ChevronLeftIcon sx={{ fontSize: { xs: 18, md: 22 } }} />
          </button>
          <button
            type="button"
            aria-label="Next categories"
            className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#f1f1f1] text-[#222222] md:h-10 md:w-10"
          >
            <ChevronRightIcon sx={{ fontSize: { xs: 18, md: 22 } }} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 border border-[#2f2f2f] md:grid-cols-2 md:border-x-0 md:border-b-0 md:border-t md:pl-14">
        {categories.map((category, index) => (
          <article
            key={category.id}
            className={`relative bg-[#d4d6d9] p-4 pb-4 md:min-h-[600px] md:p-10 md:pb-8 ${
              index === 0
                ? 'rounded-t-[26px] border-b border-[#b8bcc1] md:rounded-none md:rounded-tl-[56px] md:border-b-0 md:border-r md:border-[#c7c9cd]'
                : ''
            }`}
          >
            <div className="flex min-h-[250px] items-center justify-center md:min-h-[430px]">
              <img src={category.image} alt={category.title} className="h-full w-full object-contain" />
            </div>

            <div className="mt-3 flex items-end justify-between md:mt-10">
              <h3
                className="max-w-[170px] text-[24px] font-bold leading-[1.06] tracking-tight text-[#232321] md:max-w-[310px] md:text-[56px] md:font-extrabold md:uppercase md:leading-[0.94]"
                style={{ fontFamily: 'Rubik, sans-serif' }}
              >
                {category.title}
              </h3>

              <button
                type="button"
                aria-label={`Open ${category.title}`}
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
