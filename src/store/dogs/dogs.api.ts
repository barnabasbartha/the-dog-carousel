import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Dog, DogsApiResponse} from './dogs.model';
import {dogsWithImage, mapDogResponseWithImage} from './dogs.utils';

const useMockApi = false;

export const dogsApi = createApi({
  reducerPath: 'dogs',
  baseQuery: fetchBaseQuery({
    baseUrl: useMockApi ? 'http://localhost:3000/v1' : 'https://api.thedogapi.com/v1'
  }),
  endpoints: (builder) => ({
    getDogs: builder.query<Dog[], void>({
      query: () => '/breeds',
      transformResponse: (response: DogsApiResponse) => mapDogResponseWithImage(dogsWithImage, response),
    }),
  }),
});

export const {useGetDogsQuery} = dogsApi;
