// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ListingsResponse } from "../../types";

export const listingsApi = createApi({
  reducerPath: "listingsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    getListings: builder.query<ListingsResponse, void>({
      query: () => `listings`,
    }),
  }),
});

export const { useGetListingsQuery } = listingsApi;
