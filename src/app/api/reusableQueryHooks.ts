type QuerySnapshot<TData> = {
  data?: TData;
  isLoading: boolean;
  isFetching: boolean;
  isSuccess: boolean;
  isError: boolean;
  error?: unknown;
  refetch: () => unknown;
};

export type NormalizedQueryState<TData> = {
  data: TData;
  isInitialLoading: boolean;
  isRefreshing: boolean;
  isReady: boolean;
  hasError: boolean;
  error?: unknown;
  refetch: () => unknown;
};

export const normalizeQueryState = <TData>(
  query: QuerySnapshot<TData>,
  fallbackData: TData,
): NormalizedQueryState<TData> => ({
  data: query.data ?? fallbackData,
  isInitialLoading: query.isLoading && !query.isSuccess,
  isRefreshing: query.isFetching && query.isSuccess,
  isReady: query.isSuccess,
  hasError: query.isError,
  error: query.error,
  refetch: query.refetch,
});

export const createReusableQueryHook = <TArg, TData>(
  useBaseQueryHook: (arg: TArg) => QuerySnapshot<TData>,
  fallbackData: TData,
) => {
  return (arg: TArg): NormalizedQueryState<TData> => {
    const query = useBaseQueryHook(arg);
    return normalizeQueryState(query, fallbackData);
  };
};
