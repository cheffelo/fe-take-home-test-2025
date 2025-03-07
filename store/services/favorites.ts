// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const favoritesApi = createApi({
  reducerPath: "favoritesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    getFavorites: builder.query<string[], void>({
      query: () => "favorites",
    }),
    favoriteListing: builder.mutation<void, string>({
      query: (id) => ({
        url: `favorites`,
        method: "POST",
        body: {
          id,
        },
      }),
    }),
    unfavoriteListing: builder.mutation<void, string>({
      query: (id) => ({
        url: `favorites/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useFavoriteListingMutation, useUnfavoriteListingMutation } =
  favoritesApi;
