import { useEffect } from 'react';
import { baseApi } from '@/app/api/baseApi';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import type { NormalizedQueryState } from '@/app/api/reusableQueryHooks';
import type { ProductDto } from '@/features/products/productTypes';
import { setProducts, upsertProduct } from '@/features/products/productsSlice';

export const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<ProductDto[], void>({
      query: () => '/products',
      providesTags: (result) =>
        result
          ? [
              ...result.map((item) => ({ type: 'Products' as const, id: item.id })),
              { type: 'Products' as const, id: 'LIST' },
            ]
          : [{ type: 'Products' as const, id: 'LIST' }],
    }),
    getProductById: builder.query<ProductDto, number>({
      query: (id) => `/products/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Products', id }],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;

export const useProductsQueryState = () => {
  const dispatch = useAppDispatch();
  const cachedProducts = useAppSelector((state) => state.products.items);
  const hasCache = cachedProducts.length > 0;
  const query = useGetProductsQuery(undefined, { skip: hasCache });

  useEffect(() => {
    if (query.data && query.data.length > 0) {
      dispatch(setProducts(query.data));
    }
  }, [dispatch, query.data]);

  const data = hasCache ? cachedProducts : (query.data ?? []);

  return {
    data,
    isInitialLoading: !hasCache && query.isLoading,
    isRefreshing: query.isFetching && hasCache,
    isReady: hasCache || query.isSuccess,
    hasError: !hasCache && query.isError,
    error: query.error,
    refetch: query.refetch,
  } as NormalizedQueryState<ProductDto[]>;
};

export const useProductQueryState = (productId: number) => {
  const dispatch = useAppDispatch();
  const cachedProduct = useAppSelector((state) => state.products.items.find((item) => item.id === productId)) ?? null;
  const hasCache = Boolean(cachedProduct);
  const shouldSkip = !Number.isFinite(productId) || productId <= 0 || hasCache;
  const query = useGetProductByIdQuery(productId, { skip: shouldSkip });

  useEffect(() => {
    if (query.data) {
      dispatch(upsertProduct(query.data));
    }
  }, [dispatch, query.data]);

  const data = cachedProduct ?? query.data ?? null;

  return {
    data,
    isInitialLoading: !hasCache && query.isLoading,
    isRefreshing: query.isFetching && hasCache,
    isReady: hasCache || query.isSuccess,
    hasError: !hasCache && query.isError,
    error: query.error,
    refetch: query.refetch,
  } as NormalizedQueryState<ProductDto | null>;
};
