import GlobalEmptyPage from '@/components/common/GlobalEmptyPage';
import GlobalLoadingPage from '@/components/common/GlobalLoadingPage';
import ProductCard from '@/components/common/ProductCard';
import { useProductsQueryState } from '@/features/products/productsApi';

const ProductsPage = () => {
  const { data: products, isInitialLoading, hasError } = useProductsQueryState();
 const isEmpty = !isInitialLoading && !hasError && products.length === 0;

  return (
    <section className="space-y-6 py-8 md:space-y-8 md:py-12">
      <h1
        className="animate-fade-up text-[32px] font-semibold uppercase leading-[1] text-[#232321] md:text-[74px] md:leading-[0.95]"
        style={{ fontFamily: 'Rubik, sans-serif' }}
      >
        <span className="block">All New Drops</span>
      </h1>

      <div className="animate-fade-in grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
        {isInitialLoading
          ? (
            <div className="col-span-2 md:col-span-4">
              <GlobalLoadingPage message="Loading products..." />
            </div>
          )
          : hasError
            ? (
              <div className="col-span-2 md:col-span-4">
                <GlobalEmptyPage message="Failed to load products." />
              </div>
            )
            : isEmpty
              ? (
                <div className="col-span-2 md:col-span-4">
                  <GlobalEmptyPage message="No products available." />
                </div>
              )
              : products.map((product) => (
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

export default ProductsPage;
