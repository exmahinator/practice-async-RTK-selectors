import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://62becfba0bc9b125615fd0f7.mockapi.io/api/products?page=1&limit=10',
  }),
  endpoints: builder => ({
    fetchProducts: builder.query({
      query: () => {
        return '';
      },
    }),
  }),
});

export const { useFetchProductsQuery } = productsApi;
