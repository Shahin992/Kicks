import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ProductDto } from '@/features/products/productTypes';

type ProductsState = {
  items: ProductDto[];
  isListLoaded: boolean;
};

const initialState: ProductsState = {
  items: [],
  isListLoaded: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductDto[]>) => {
      state.items = action.payload;
      state.isListLoaded = true;
    },
    upsertProduct: (state, action: PayloadAction<ProductDto>) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if (index >= 0) {
        state.items[index] = action.payload;
        return;
      }
      state.items.push(action.payload);
    },
  },
});

export const { setProducts, upsertProduct } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
