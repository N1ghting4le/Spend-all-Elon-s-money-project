import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const filtersAdapter = createEntityAdapter();

const initialState = filtersAdapter.getInitialState({
    filters: ['all', 'vehicles', 'food', 'gaming', 'computer components', 'selected'],
    activeFilter: 'all'
});

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        activeFilterChange: (state, action) => {
            state.activeFilter = action.payload;
        }
    }
});

const {actions, reducer} = filtersSlice;
export default reducer;
export const {
    activeFilterChange
} = actions;