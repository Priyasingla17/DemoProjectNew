import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      console.log(state.items.length);
      const position = state.items.findIndex(
        (x) => x.item == action.payload.item
      );
      console.log(position, " cc", action.payload.item);
      state.items.splice(position, 1);
      console.log(current(state));
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
