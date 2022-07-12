import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'cart',
  initialState: {
    item: {
      cartItems: [],
      totalQuantity: 0,
    },
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existItem = state.item.cartItems.find(
        (item) => item.id == newItem.id
      );
      if (!existItem) {
        state.item.cartItems.push({
          ...action.payload,
          totalPrice: action.payload.price,
        });
      } else {
        existItem.quantity++;
        existItem.totalPrice = existItem.totalPrice + newItem.price;
      }
      state.item.totalQuantity++;
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const existItem = state.item.cartItems.find((item) => item.id == id);
      if (existItem.quantity === 1) {
        state.item.cartItems = state.item.cartItems.filter(
          (item) => item.id != id
        );
      } else {
        existItem.quantity--;
        existItem.totalPrice = existItem.totalPrice - existItem.price;
      }
      state.item.totalQuantity--;
    },
    removeCompletely: (state, action) => {
      const id = action.payload;
      const existItem = state.item.cartItems.find((item) => item.id == id);
      if (existItem) {
        state.item.totalQuantity =
          state.item.totalQuantity - existItem.quantity;
      }
      state.item.cartItems = state.item.cartItems.filter(
        (item) => item.id != id
      );
    },
  },
});
export const { addItem, removeItem, removeCompletely } = counterSlice.actions;

export default counterSlice.reducer;
