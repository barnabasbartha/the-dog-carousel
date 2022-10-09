import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Dog, DogsApiResponse} from './dogs.model';
import {dogsWithImage, mapDogResponseWithImage} from './dogs.utils';

export const dogsApi = createApi({
  reducerPath: 'dogs',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thedogapi.com/v1/breeds'
  }),
  endpoints: (builder) => ({
    getDogs: builder.query<Dog[], void>({
      query: () => '/',
      transformResponse: (response: DogsApiResponse) => mapDogResponseWithImage(dogsWithImage, response),
    }),
  }),
});

export const {useGetDogsQuery} = dogsApi;
