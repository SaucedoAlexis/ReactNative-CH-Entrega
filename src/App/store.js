import { configureStore } from "@reduxjs/toolkit";
import dishesReducer from "../features/dishes/dishesSlice";
import { dishesApi } from "./services/shopservices";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    dishes: dishesReducer,
    [dishesApi.reducerPath]: dishesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dishesApi.middleware),
});

setupListeners(store.dispatch);
