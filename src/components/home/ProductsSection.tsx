import { Link } from 'react-router-dom';
import { CustomButton } from '@/components/common/CustomButton';
import ProductCard from '@/components/common/ProductCard';
import { ROUTES } from '@/constants/routes';
import { useProductsQueryState } from '@/features/products/productsApi';

const ProductsSection = () => {
  const { data: products, isInitialLoading, hasError } = useProductsQueryState();
  const visibleProducts = products.slice(0, 4);

  return (
    <section className="space-y-5 py-6 md:space-y-8 md:py-10">
      <div className="flex items-end justify-between gap-4">
        <h2
          className="text-[24px] font-semibold uppercase leading-[1] tracking-normal text-[#232321] md:text-[74px] md:font-semibold md:leading-[0.95] md:tracking-normal"
          style={{ fontFamily: 'Rubik, sans-serif' }}
        >
          <span className="block">Don&apos;t miss out</span>
          <span className="block">new drops</span>
        </h2>

        <CustomButton
          component={Link}
          to={ROUTES.products}
          variant="contained"
          customColor="#4A69E2"
          sx={{
            borderRadius: '8px',
            px: { xs: 2, md: 5 },
            py: { xs: 1, md: 1.5 },
            fontSize: { xs: '10px', md: '16px' },
            fontWeight: 700,
            letterSpacing: '0.03em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          Shop New Drops
        </CustomButton>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
        {isInitialLoading
          ? Array.from({ length: 4 }, (_, index) => (
              <div key={index} className="h-[250px] animate-pulse rounded-[16px] bg-[#d8d9dd] md:h-[430px]" />
            ))
          : hasError
            ? (
              <div className="col-span-2 rounded-[16px] bg-[#e1e1e1] p-6 text-center text-[#232321] md:col-span-4">
                Failed to load products.
              </div>
            )
            : visibleProducts.length === 0
              ? (
                <div className="col-span-2 rounded-[16px] bg-[#e1e1e1] p-6 text-center text-[#232321] md:col-span-4">
                  No products available.
                </div>
              )
              : visibleProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.images?.[0] ?? ''}
                price={product.price}
              />
            ))}
      </div>
    </section>
  );
};

export default ProductsSection;
