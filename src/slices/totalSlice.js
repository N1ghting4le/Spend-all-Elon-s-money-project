import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const totalAdapter = createEntityAdapter();

const initialState = totalAdapter.getInitialState({
    total: 0
});

const totalSlice = createSlice({
    name: 'total',
    initialState,
    reducers: {
        totalDecrease: (state, action) => {
            state.total = state.total - action.payload
        },
        totalIncrease: (state, action) => {
            state.total = state.total + action.payload
        }
    }
});

const {actions, reducer} = totalSlice;
export default reducer;
export const {
    totalDecrease,
    totalIncrease
} = actions;