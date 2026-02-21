import ProductCard from '@/components/common/ProductCard';
import { useProductsQueryState } from '@/features/products/productsApi';

const ProductsPage = () => {
  const { data: products, isInitialLoading, hasError } = useProductsQueryState();

  return (
    <section className="space-y-6 py-8 md:space-y-8 md:py-12">
      <h1
        className="text-[32px] font-semibold uppercase leading-[1] text-[#232321] md:text-[74px] md:leading-[0.95]"
        style={{ fontFamily: 'Rubik, sans-serif' }}
      >
        <span className="block">All New</span>
        <span className="block">Drops</span>
      </h1>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
        {isInitialLoading
          ? Array.from({ length: 8 }, (_, index) => (
              <div key={index} className="h-[250px] animate-pulse rounded-[16px] bg-[#d8d9dd] md:h-[430px]" />
            ))
          : hasError
            ? (
              <div className="col-span-2 rounded-[16px] bg-[#e1e1e1] p-6 text-center text-[#232321] md:col-span-4">
                Failed to load products.
              </div>
            )
            : products.length === 0
              ? (
                <div className="col-span-2 rounded-[16px] bg-[#e1e1e1] p-6 text-center text-[#232321] md:col-span-4">
                  No products available.
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
