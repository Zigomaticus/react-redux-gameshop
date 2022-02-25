import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsInCart: [],
  },
  reducers: {
    setItemInCart: (state, action) => {
      state.itemsInCart.push(action.payload);
    },
    deleteItemfromCart: (state, id) => {
      state.itemsInCart = state.itemsInCart.filter((game) => game.id !== id);
    },
  },
});

export const { setItemInCart, deleteItemfromCart } = cartSlice.actions;
export default cartSlice.reducer;
