import { useEffect } from 'react';
import { baseApi } from '@/app/api/baseApi';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import type { NormalizedQueryState } from '@/app/api/reusableQueryHooks';
import type { CategoryDto } from '@/features/categories/categoryTypes';
import { setCategories } from '@/features/categories/categoriesSlice';

export const categoriesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<CategoryDto[], void>({
      query: () => '/categories',
      providesTags: (result) =>
        result
          ? [
              ...result.map((item) => ({ type: 'Categories' as const, id: item.id })),
              { type: 'Categories' as const, id: 'LIST' },
            ]
          : [{ type: 'Categories' as const, id: 'LIST' }],
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;

export const useCategoriesQueryState = () => {
  const dispatch = useAppDispatch();
  const cachedCategories = useAppSelector((state) => state.categories.items);
  const isListLoaded = useAppSelector((state) => state.categories.isListLoaded);
  const query = useGetCategoriesQuery(undefined, { skip: isListLoaded });

  useEffect(() => {
    if (query.isSuccess) {
      dispatch(setCategories(query.data ?? []));
    }
  }, [dispatch, query.data, query.isSuccess]);

  const data = isListLoaded ? cachedCategories : (query.data ?? []);

  return {
    data,
    isInitialLoading: !isListLoaded && query.isLoading,
    isRefreshing: query.isFetching && isListLoaded,
    isReady: isListLoaded || query.isSuccess,
    hasError: !isListLoaded && query.isError,
    error: query.error,
    refetch: query.refetch,
  } as NormalizedQueryState<CategoryDto[]>;
};
