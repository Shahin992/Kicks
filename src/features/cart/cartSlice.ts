import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ProductDto } from '@/features/products/productTypes';

type CartItem = {
  product: ProductDto;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductDto>) => {
      const existingItem = state.items.find((item) => item.product.id === action.payload.id);

      if (existingItem) {
        return;
      }

      state.items.push({
        product: action.payload,
      });
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.product.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
