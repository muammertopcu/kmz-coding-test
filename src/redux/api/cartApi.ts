import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {AddToCartResponse, Basket, CartItem, Coupon} from '@types';

interface ICartItems {
  data: {
    basket: Basket;
    coupon: Coupon;
    detail: CartItem[];
    message: {
      minOrderAmount: number;
    };
  };
}

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://apiv5.akilliticaretim.com/api/v5/sf',
  }),
  endpoints: builder => ({
    getCart: builder.query<ICartItems, unknown>({
      query: () => ({
        url: '/cart/cart?userId=1',
        method: 'GET',
        headers: {
          GUID: '24BE-DB0E-D75E-4060',
        },
      }),
    }),
    addToCart: builder.mutation({
      query: args => ({
        url: '/cart/cart',
        method: 'POST',
        body: args,
        headers: {
          GUID: '24BE-DB0E-D75E-4060',
        },
        responseHandler: async (
          response: Response,
        ): Promise<AddToCartResponse> => {
          const data = await response.json();
          return data.data;
        },
      }),
    }),
  }),
});

export const {useAddToCartMutation, useGetCartQuery} = cartApi;
