import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '@/app/hooks';
import GlobalEmptyPage from '@/components/common/GlobalEmptyPage';
import ProductsCarouselSection from '@/components/common/ProductsCarouselSection';
import { CustomButton } from '@/components/common/CustomButton';
import { addToCart } from '@/features/cart/cartSlice';
import { useProductQueryState, useProductsQueryState } from '@/features/products/productsApi';

const AVAILABLE_SIZES = [38, 39, 40, 41, 42, 43, 44, 45, 46];

const ProductDetailPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);
  const { data: product, isInitialLoading, hasError, error } = useProductQueryState(productId);
  const { data: products, hasError: relatedHasError } = useProductsQueryState();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(38);
  const [selectedColor, setSelectedColor] = useState('#232321');

  useEffect(() => {
    if (!product) {
      return;
    }
    setSelectedImageIndex(0);
    setSelectedSize(38);
    setSelectedColor('#232321');
  }, [product?.id]);

  const safeImages = useMemo(() => {
    if (!product) {
      return [];
    }
    return (product.images ?? []).filter(Boolean);
  }, [product]);

  if (!Number.isFinite(productId)) {
    return (
      <div className="py-8 md:py-10">
        <GlobalEmptyPage message="Product not found." />
      </div>
    );
  }

  if (isInitialLoading) {
    return <div className="h-[600px] animate-pulse rounded-[16px] bg-[#d4d4d4] py-8 md:h-[840px]" />;
  }

  const isNotFound = hasError && typeof error === 'object' && error !== null && 'status' in error && error.status === 404;

  if (isNotFound) {
    return (
      <div className="py-8 md:py-10">
        <GlobalEmptyPage message="No product found for this ID." />
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="py-8 md:py-10">
        <GlobalEmptyPage message="Unable to load product details." />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="py-8 md:py-10">
        <GlobalEmptyPage message="No product found for this ID." />
      </div>
    );
  }

  const productImages = safeImages.length > 0 ? safeImages : [product.category?.image ?? ''];
  const relatedProducts = products.filter((item) => item.id !== product.id);
  const activeImage = productImages[Math.min(selectedImageIndex, productImages.length - 1)] ?? '';
  const primaryImage = productImages[0] ?? '';

  return (
    <section className="space-y-10 py-4 md:space-y-14 md:py-8">
      <div className="grid gap-4 md:grid-cols-[1.3fr_0.9fr] md:gap-5">
        <div className="space-y-2.5 md:space-y-0">
          <div className="overflow-hidden rounded-[10px] bg-[#e7e7e6] md:hidden">
            <img
              src={activeImage}
              alt={product.title}
              className="h-[220px] w-full object-cover"
            />
          </div>

          <div className="flex justify-center gap-1.5 md:hidden">
            {productImages.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedImageIndex(index)}
                className={`h-1.5 rounded-full transition-all ${selectedImageIndex === index ? 'w-4 bg-[#4A69E2]' : 'w-2 bg-[#b9b9b8]'}`}
                aria-label={`Show image ${index + 1}`}
              />
            ))}
          </div>

          <div className="grid grid-cols-4 gap-1.5 md:hidden">
            {productImages.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setSelectedImageIndex(index)}
                className={`overflow-hidden rounded-[8px] border p-0.5 ${selectedImageIndex === index ? 'border-[#4A69E2]' : 'border-transparent'}`}
                aria-label={`Select thumbnail ${index + 1}`}
              >
                <img src={image} alt={`${product.title} thumbnail ${index + 1}`} className="h-[42px] w-full rounded-[6px] bg-[#dfdedd] object-cover" />
              </button>
            ))}
          </div>

          <div className="hidden gap-1 md:grid md:grid-cols-2">
            <div className="overflow-hidden bg-[#e7e7e6] p-2">
              <img src={productImages[0] ?? activeImage} alt={`${product.title} side`} className="h-[320px] w-full object-contain" />
            </div>
            <div className="overflow-hidden bg-[#e7e7e6] p-2">
              <img src={productImages[1] ?? activeImage} alt={`${product.title} top`} className="h-[320px] w-full object-contain" />
            </div>
            <div className="overflow-hidden bg-[#e7e7e6] p-2">
              <img src={productImages[2] ?? activeImage} alt={`${product.title} detail`} className="h-[320px] w-full object-cover" />
            </div>
            <div className="overflow-hidden bg-[#e7e7e6] p-2">
              <img src={productImages[3] ?? activeImage} alt={`${product.title} sole`} className="h-[320px] w-full object-cover" />
            </div>
          </div>
        </div>

        <div className="space-y-3.5 rounded-[10px] bg-[#cdcdcc] p-2.5 md:space-y-4 md:bg-transparent md:p-0">
          <span className="inline-flex rounded-full bg-[#4A69E2] px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.03em] text-white md:rounded-[20px] md:px-3 md:text-[10px]">
            {product.category?.name ?? 'New release'}
          </span>

          <div className="space-y-1">
            <h1
              className="max-w-[450px] text-[18px] font-semibold uppercase leading-[1.05] text-[#232321] md:text-[40px]"
              style={{ fontFamily: 'Rubik, sans-serif' }}
            >
              {product.title}
            </h1>
            <p className="text-[22px] font-semibold leading-none text-[#4A69E2] md:text-[32px]">${product.price}.00</p>
          </div>

          <div className="space-y-1.5">
            <p className="text-[8px] font-semibold uppercase text-[#232321]/70 md:text-[11px]">Color</p>
            <div className="flex gap-2">
              {['#232321', '#9dac97'].map((color) => (
                <button
                  key={color}
                  type="button"
                  onClick={() => setSelectedColor(color)}
                  className={`h-5 w-5 rounded-full border-2 ${selectedColor === color ? 'border-[#232321]' : 'border-transparent'} md:h-6 md:w-6`}
                  style={{ backgroundColor: color }}
                  aria-label={`Choose ${color} color`}
                />
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-[8px] font-semibold uppercase text-[#232321]/70 md:text-[11px]">Size</p>
              <button type="button" className="text-[8px] font-semibold uppercase text-[#232321]/70 md:text-[11px]">
                Size chart
              </button>
            </div>
            <div className="grid grid-cols-7 gap-1.5 md:grid-cols-6">
              {AVAILABLE_SIZES.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`rounded-[6px] border py-1 text-[8px] font-semibold md:py-2 md:text-[10px] ${selectedSize === size ? 'border-[#232321] bg-[#232321] text-[#f5f5f5]' : 'border-[#d8d8d8] bg-[#f4f4f4] text-[#232321]'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-1.5">
            <CustomButton
              type="button"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: primaryImage,
                  }),
                )
              }
              variant="contained"
              customColor="#232321"
              sx={{
                flex: 1,
                height: { xs: '24px', md: '40px' },
                borderRadius: '6px',
                fontSize: { xs: '8px', md: '11px' },
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              Add to Cart
            </CustomButton>
            <button
              type="button"
              aria-label="Add to wishlist"
              className="flex h-[24px] w-[24px] items-center justify-center rounded-[6px] bg-[#232321] text-white md:h-[40px] md:w-[40px]"
            >
              <FavoriteBorderOutlinedIcon sx={{ fontSize: { xs: 12, md: 18 } }} />
            </button>
          </div>

          <div className="space-y-1.5 border-t border-[#bababa] pt-2 md:pt-3">
            <div className="flex items-center justify-between">
              <h2 className="text-[9px] font-semibold uppercase text-[#232321] md:text-[12px]">About the product</h2>
              <button type="button" className="text-[8px] font-medium text-[#232321]/70 md:text-[10px]">
                Show all (+)
              </button>
            </div>
            <p className="text-[8px] leading-[1.45] text-[#70706e] md:text-[12px]">{product.description}</p>
            <ul className="list-disc space-y-1 pl-4 text-[8px] leading-[1.45] text-[#70706e] md:text-[12px]">
              <li>Pay over time in interest-free installments.</li>
              <li>Standard shipping includes tracking and insurance.</li>
            </ul>
          </div>
        </div>
      </div>

      <ProductsCarouselSection
        title="You may also like"
        products={relatedProducts.map((item) => ({
          id: item.id,
          title: item.title,
          image: item.images?.[0] ?? '',
          price: item.price,
        }))}
        hasError={relatedHasError}
        errorMessage="Failed to load related products."
        emptyMessage="No related products available."
      />
    </section>
  );
};

export default ProductDetailPage;
