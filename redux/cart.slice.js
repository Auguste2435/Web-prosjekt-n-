import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'data',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.find((data) => data.id === action.payload.id);
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const ev = state.find((ev) => ev.id === action.payload);
      ev.quantity++;
    },
    decrementQuantity: (state, action) => {
      const ev = state.find((ev) => ev.id === action.payload);
      if (ev.quantity === 1) {
        const index = state.findIndex((ev) => ev.id === action.payload);
        state.splice(index, 1);
      } else {
        ev.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((ev) => ev.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;