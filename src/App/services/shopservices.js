import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../../firebase/db";

export const dishesApi = createApi({
  reducerPath: "dishesApi",
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  endpoints: (builder) => ({
    getDishes: builder.query({
      query: () => `dishes.json`,
    }),
    getDish: builder.query({
      query: (id) => `dishes/${id}.json`,
    }),
    getCategories: builder.query({
      query: () => "dishesCategories.json",
    }),
    getMyDishes: builder.query({
      query: () => `myDishes.json`,
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetDishesQuery,
  useGetMyDishesQuery,
  useGetDishQuery,
} = dishesApi;
