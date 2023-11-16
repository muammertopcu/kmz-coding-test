import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {AddToCartResponse} from "@types";

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://apiv5.akilliticaretim.com/api/v5/sf',
  }),
  endpoints: builder => ({
    addToCart: builder.mutation({
      query: args => ({
        url: '/cart/cart',
        method: 'POST',
        body: args,
        headers: {
          GUID: '24BE-DB0E-D75E-4060',
        },
        responseHandler: async (response: Response): Promise<AddToCartResponse>  => {
          const data = await response.json();
          return data.data;
        }
      }),
    }),
  }),
});

export const {useAddToCartMutation} = cartApi;
