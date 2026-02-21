import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '@/app/api/baseApi';
import { cartReducer } from '@/features/cart/cartSlice';
import { categoriesReducer } from '@/features/categories/categoriesSlice';
import { productsReducer } from '@/features/products/productsSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
