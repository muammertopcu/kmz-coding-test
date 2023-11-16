import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {Product} from '@types';

interface GetProduct {
  data: Product[];
  status: boolean;
}

interface GetProductsProps {
  categoryId: number;
  page: number;
  pageSize: number;
}

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://apiv5.akilliticaretim.com/api/v5/sf',
  }),
  endpoints: builder => ({
    getProducts: builder.query<GetProduct, GetProductsProps>({
      query: ({categoryId, page, pageSize}: GetProductsProps) => ({
        url: `/product/category_products?Id=${categoryId}&PageNumber=${page}&PageSize=${pageSize}`,
        headers: {
          GUID: '24BE-DB0E-D75E-4060',
        },
      }),
    }),
  }),
});

export const {useGetProductsQuery} = productApi;
