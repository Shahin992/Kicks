import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BasicInput from '@/components/common/BasicInput';
import GlobalEmptyPage from '@/components/common/GlobalEmptyPage';
import ProductsCarouselSection from '@/components/common/ProductsCarouselSection';
import { CustomButton } from '@/components/common/CustomButton';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { removeFromCart } from '@/features/cart/cartSlice';
import { useProductsQueryState } from '@/features/products/productsApi';

const CartPage = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const { data: products, hasError, isInitialLoading } = useProductsQueryState();
  const isCartEmpty = cartItems.length === 0;

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price, 0);
  const delivery = isCartEmpty ? 0 : 6.99;
  const total = subtotal + delivery;
  const relatedProducts = products.filter((item) => !cartItems.some((cartItem) => cartItem.product.id === item.id));

  return (
    <section className="space-y-4 py-4 md:space-y-6 md:py-8">
      <div className="space-y-1">
        <h1
          className="text-[28px] font-semibold leading-none text-[#232321] md:text-[44px]"
          style={{ fontFamily: 'Rubik, sans-serif' }}
        >
          Saving to celebrate
        </h1>
        <p className="max-w-[680px] text-[9px] text-[#5f5f5e] md:text-[12px]">
          Enjoy up to 50% off thousands of styles during the end of Year sale - while supplies last. No code needed.
        </p>
        <p className="text-[9px] font-semibold text-[#232321] md:text-[12px]">Join us. or Sign-in</p>
      </div>

      <div className="grid gap-3 md:grid-cols-[1.6fr_0.9fr] md:gap-5">
        <div className="space-y-2 rounded-[12px] bg-[#cdcdcc] p-3 md:rounded-[16px] md:p-4">
          <h2
            className="text-[24px] font-semibold leading-none text-[#232321] md:text-[40px]"
            style={{ fontFamily: 'Rubik, sans-serif' }}
          >
            Your Bag
          </h2>
          <p className="text-[8px] text-[#5f5f5e] md:text-[11px]">Items in your bag not reserved - check out now to make them yours.</p>

          {cartItems.length === 0 ? (
            <div className="rounded-[10px] bg-[#ececeb] p-2">
              <GlobalEmptyPage message="Your cart is empty." />
            </div>
          ) : (
            cartItems.map((item) => (
              <article key={item.product.id} className="rounded-[10px] bg-[#ececeb] p-2.5 md:p-3">
                <div className="flex gap-2 md:gap-4">
                  <div className="h-[70px] w-[96px] overflow-hidden rounded-[8px] bg-[#d8d9dd] md:h-[120px] md:w-[180px]">
                    <img src={item.product.images?.[0] ?? ''} alt={item.product.title} className="h-full w-full object-cover" />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-0.5">
                        <h3
                          className="text-[12px] font-bold uppercase leading-[1.05] text-[#232321] md:text-[28px]"
                          style={{ fontFamily: 'Rubik, sans-serif' }}
                        >
                          {item.product.title}
                        </h3>
                        <p className="text-[8px] text-[#5f5f5e] md:text-[12px]">Men&apos;s Road Running Shoes</p>
                        <p className="text-[8px] text-[#5f5f5e] md:text-[12px]">Enamel Blue / University White</p>
                        <button type="button" className="flex items-center gap-1 text-[8px] text-[#232321] md:text-[12px]">
                          Size 10
                          <KeyboardArrowDownIcon sx={{ fontSize: { xs: 12, md: 16 } }} />
                        </button>
                        <button type="button" className="flex items-center gap-1 text-[8px] text-[#232321] md:text-[12px]">
                          Quantity 1
                          <KeyboardArrowDownIcon sx={{ fontSize: { xs: 12, md: 16 } }} />
                        </button>
                      </div>
                      <p className="text-[14px] font-bold text-[#4A69E2] md:text-[28px]">${item.product.price.toFixed(2)}</p>
                    </div>

                    <div className="flex items-center gap-2 text-[#555555]">
                      <button type="button" aria-label="Add to wishlist">
                        <FavoriteBorderOutlinedIcon sx={{ fontSize: { xs: 14, md: 18 } }} />
                      </button>
                      <button
                        type="button"
                        aria-label="Remove item"
                        onClick={() => dispatch(removeFromCart(item.product.id))}
                      >
                        <DeleteOutlineIcon sx={{ fontSize: { xs: 14, md: 18 } }} />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>

        <div className="space-y-2">
          <div className="rounded-[12px] bg-[#cdcdcc] p-3 md:rounded-[16px] md:p-4">
            <h2
              className="text-[24px] font-semibold leading-none text-[#232321] md:text-[40px]"
              style={{ fontFamily: 'Rubik, sans-serif' }}
            >
              Order Summary
            </h2>

            <div className="mt-2 space-y-1.5 border-b border-[#b0b0af] pb-2.5 text-[9px] text-[#232321] md:mt-3 md:space-y-2 md:pb-3 md:text-[13px]">
              <div className="flex items-center justify-between">
                <span>{cartItems.length} ITEM</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Delivery</span>
                <span>${delivery.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Sales Tax</span>
                <span>-</span>
              </div>
            </div>

            <div className="mt-2 flex items-center justify-between text-[12px] font-bold text-[#232321] md:mt-3 md:text-[24px]">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <CustomButton
              type="button"
              variant="contained"
              customColor="#232321"
              sx={{
                mt: 1.5,
                width: '100%',
                borderRadius: '6px',
                fontSize: { xs: '8px', md: '11px' },
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                height: { xs: '24px', md: '34px' },
              }}
              disabled={isCartEmpty}
            >
              Checkout
            </CustomButton>
          </div>

          <BasicInput
            fullWidth
            placeholder="Use a promo code"
            disabled={isCartEmpty}
            sx={{
              backgroundColor: '#f4f4f4 !important',
              border: '1px solid #d0d0cf',
              borderRadius: '6px',
              height: { xs: '30px', md: '36px' },
              '& input': {
                fontSize: { xs: '10px', md: '12px' },
              },
              ...(isCartEmpty
                ? {
                    opacity: 0.6,
                    cursor: 'not-allowed',
                  }
                : {}),
            }}
          />
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
        isLoading={isInitialLoading}
        hasError={hasError}
        errorMessage="Failed to load related products."
        emptyMessage="No related products available."
      />
    </section>
  );
};

export default CartPage;
