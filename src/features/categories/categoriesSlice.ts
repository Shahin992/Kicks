import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CategoryDto } from '@/features/categories/categoryTypes';

type CategoriesState = {
  items: CategoryDto[];
};

const initialState: CategoriesState = {
  items: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<CategoryDto[]>) => {
      state.items = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
