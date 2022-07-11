import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { FullTagDescription } from '@reduxjs/toolkit/src/query/endpointDefinitions';
import { Locations, LocationType, Term } from './types';

type TagsType = {
  readonly [
  key in 'location'
  ]: FullTagDescription<key>;
};

export const apiTag: TagsType = {
  location: {type: 'location'},
};

export const backendApi = createApi({
  reducerPath: 'backend',
  tagTypes: Object.values(apiTag).map(tag => tag.type),
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.skypicker.com' }),
  endpoints: () => ({}),
});

export const locationsApi = backendApi.injectEndpoints({
  endpoints: (builder) => ({
    getLocations: builder.query<Locations, {term: Term, type: LocationType}>({
      query: ({term, type}) => `/locations?term=${term}&location_types=${type}`,
      providesTags: [apiTag.location],
    }),
  }),
});

export const {
  useGetLocationsQuery,
} = locationsApi;
