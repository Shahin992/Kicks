import { CustomButton } from '@/components/common/CustomButton';
import ProductCard from '@/components/common/ProductCard';
import { products } from '@/constants/products';

const ProductsSection = () => {
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
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.images[0]}
            badge={product.badge}
            badgeColor={product.badgeColor}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
