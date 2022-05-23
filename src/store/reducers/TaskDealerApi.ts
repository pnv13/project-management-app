import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

const BASE_URL = 'https://react-final-back3.herokuapp.com/';

export const taskDealerApi = createApi({
  reducerPath: 'taskDealerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const { tokenStatus } = (getState() as RootState).userSlice;
      const { token } = (getState() as RootState).userSlice;
      console.log(token);
      if (tokenStatus) {
        headers.set('authorization', `Bearer ${`${token}`}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (body) => ({
        url: 'signup',
        method: 'POST',
        body,
      }),
    }),
    signIn: builder.mutation({
      query: (body) => ({
        url: 'signin',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation } = taskDealerApi;