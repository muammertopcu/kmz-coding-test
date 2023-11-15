import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://apiv5.akilliticaretim.com/api/v5/sf',
  }),
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
        headers: {
          GUID: '24BE-DB0E-D75E-4060',
        },
      }),
    }),
  }),
});

export const {useLoginMutation} = authApi;
