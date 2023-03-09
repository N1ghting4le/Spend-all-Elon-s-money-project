import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const selectedGoodsAdapter = createEntityAdapter();

const initialState = selectedGoodsAdapter.getInitialState({
    selectedGoods: []
});

const selectedGoodsSlice = createSlice({
    name: 'selectedGoods',
    initialState,
    reducers: {
        addItem: (state, action) => {
            selectedGoodsAdapter.addOne(state, action.payload)
        },
        removeItem: (state, action) => {
            selectedGoodsAdapter.removeOne(state, action.payload)
        }
    }
});

const {actions, reducer} = selectedGoodsSlice;
export const {selectAll} = selectedGoodsAdapter.getSelectors(state => state.selectedGoods);
export default reducer;
export const {
    addItem,
    removeItem
} = actions;