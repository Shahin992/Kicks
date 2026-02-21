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
  const hasCache = cachedCategories.length > 0;
  const query = useGetCategoriesQuery(undefined, { skip: hasCache });

  useEffect(() => {
    if (query.data && query.data.length > 0) {
      dispatch(setCategories(query.data));
    }
  }, [dispatch, query.data]);

  const data = hasCache ? cachedCategories : (query.data ?? []);

  return {
    data,
    isInitialLoading: !hasCache && query.isLoading,
    isRefreshing: query.isFetching && hasCache,
    isReady: hasCache || query.isSuccess,
    hasError: !hasCache && query.isError,
    error: query.error,
    refetch: query.refetch,
  } as NormalizedQueryState<CategoryDto[]>;
};
