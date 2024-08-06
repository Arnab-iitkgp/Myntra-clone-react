import { createSlice } from "@reduxjs/toolkit";

const ItemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (store, action) => {
      console.log("reducer", store, action);
      return action.payload;
    },
  },
});
export const itemsAction = ItemSlice.actions;
export default ItemSlice;
