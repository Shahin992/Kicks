import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CategoryDto } from '@/features/categories/categoryTypes';

type CategoriesState = {
  items: CategoryDto[];
  isListLoaded: boolean;
};

const initialState: CategoriesState = {
  items: [],
  isListLoaded: false,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<CategoryDto[]>) => {
      state.items = action.payload;
      state.isListLoaded = true;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
