import { createSlice } from "@reduxjs/toolkit";
import { filters } from "../constants/filters";

const filtersSlice = createSlice({
  name: "filters",
  initialState: filters[0],
  reducers: {
    activeFilterChange: (_, action) => action.payload,
  },
});

const { actions, reducer } = filtersSlice;

export const { activeFilterChange } = actions;
export default reducer;
