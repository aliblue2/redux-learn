import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  change: false,
};
const cartReducer = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      const exsitingItem = state.items.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (exsitingItem !== -1) {
        console.log("this product is in your cart");
      } else {
        state.items.push(action.payload);
        state.change = true;
      }
    },
    removeFromCart(state, action) {
      const elseItems = state.items.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.items = elseItems;
      state.change = true;
    },
    replaceCartFromStore(state, action) {
      state.items = action.payload;
    },
  },
});

export const cartActions = cartReducer.actions;
export default cartReducer.reducer;
