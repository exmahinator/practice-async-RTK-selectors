import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './operations';
const initialState = {
  products: [],
  cart: [],
  loader: false,
  error: '',
};

export const sliceProducts = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    addToCart(state, { payload }) {
      !state.cart.some(el => el.id === payload.id) && state.cart.push(payload);
    },
    removeFromCart(state, { payload }) {
      state.cart = state.cart.filter(el => el.id !== payload);
    },
  },
  extraReducers: {
    [fetchProducts.pending](state) {
      state.error = '';
      state.loader = true;
    },
    [fetchProducts.fulfilled](state, action) {
      state.loader = false;
      state.products = action.payload;
    },
    [fetchProducts.rejected](state, { payload }) {
      state.error = payload;
      state.loader = false;
    },
  },
});
export const { addToCart, removeFromCart } = sliceProducts.actions;
