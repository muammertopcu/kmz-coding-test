import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {Category} from '@types';

interface GetCategory {
  data: {
    categories: Category[];
    parentCategoryId: number;
    selectedCategoryId: number;
  };
  status: boolean;
}

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://apiv5.akilliticaretim.com/api/v5/ad',
  }),
  endpoints: builder => ({
    getCategories: builder.query<GetCategory, void>({
      query: () => ({
        url: '/product/categories',
        headers: {
          GUID: '24BE-DB0E-D75E-4060',
        },
      }),
    }),
  }),
});

export const {useGetCategoriesQuery} = categoryApi;
