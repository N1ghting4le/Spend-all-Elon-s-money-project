import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const moneyAdapter = createEntityAdapter();

const initialState = moneyAdapter.getInitialState({
    total: 0,
    balance: 186900000000
});

const moneySlice = createSlice({
    name: 'money',
    initialState,
    reducers: {
        sell: (state, action) => {
            state.total = state.total - action.payload;
            state.balance = state.balance + action.payload;
        },
        buy: (state, action) => {
            state.total = state.total + action.payload;
            state.balance = state.balance - action.payload;
        }
    }
});

const {actions, reducer} = moneySlice;
export default reducer;
export const {
    sell,
    buy
} = actions;