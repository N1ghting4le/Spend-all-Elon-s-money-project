import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import filters from "../slices/filtersSlice";
import money from "../slices/moneySlice";
import selectedGoods from "../slices/selectedGoodsSlice";

const store = configureStore({
  reducer: {
    money,
    filters,
    selectedGoods,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
