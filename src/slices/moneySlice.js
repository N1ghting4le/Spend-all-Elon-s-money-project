import { createSlice } from "@reduxjs/toolkit";

const moneySlice = createSlice({
  name: "money",
  initialState: {
    total: 0,
    balance: 186900000000,
  },
  reducers: {
    sell: (state, action) => {
      state.total = state.total - action.payload;
      state.balance = state.balance + action.payload;
    },
    buy: (state, action) => {
      state.total = state.total + action.payload;
      state.balance = state.balance - action.payload;
    },
  },
});

const { actions, reducer } = moneySlice;

export const { sell, buy } = actions;
export default reducer;
