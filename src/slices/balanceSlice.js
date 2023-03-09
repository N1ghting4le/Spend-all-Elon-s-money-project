import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const balanceAdapter = createEntityAdapter();

const initialState = balanceAdapter.getInitialState({
    balance: 186900000000
});

const balanceSlice = createSlice({
    name: 'balance',
    initialState,
    reducers: {
        balanceDecrease: (state, action) => {
            state.balance = state.balance - action.payload
        },
        balanceIncrease: (state, action) => {
            state.balance = state.balance + action.payload
        }
    }
});

const {actions, reducer} = balanceSlice;
export default reducer;
export const {
    balanceDecrease,
    balanceIncrease
} = actions;