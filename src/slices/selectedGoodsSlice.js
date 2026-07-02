import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const selectedGoodsAdapter = createEntityAdapter();
const selectedGoodsSlice = createSlice({
  name: "selectedGoods",
  initialState: selectedGoodsAdapter.getInitialState(),
  reducers: {
    addItem: (state, action) => {
      selectedGoodsAdapter.addOne(state, action.payload);
    },
    removeItem: (state, action) => {
      selectedGoodsAdapter.removeOne(state, action.payload);
    },
  },
});

const { actions, reducer } = selectedGoodsSlice;

export const { selectAll } = selectedGoodsAdapter.getSelectors(
  (state) => state.selectedGoods,
);
export const { addItem, removeItem } = actions;
export default reducer;
