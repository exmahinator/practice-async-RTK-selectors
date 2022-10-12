import { createSlice } from '@reduxjs/toolkit';

// Without createApi-------
// import { fetchProducts } from './operations';

const initialState = {
  products: [],
  cart: [],
  loader: false,
  error: '',
};

// Without createApi-------
// export const sliceProducts = createSlice({
//   name: 'products',
//   initialState: initialState,
//   reducers: {
//     addToCart(state, { payload }) {
//       !state.cart.some(el => el.id === payload.id) && state.cart.push(payload);
//     },
//     removeFromCart(state, { payload }) {
//       state.cart = state.cart.filter(el => el.id !== payload);
//     },
//   },
//   extraReducers: {
//     [fetchProducts.pending](state) {
//       state.error = '';
//       state.loader = true;
//     },
//     [fetchProducts.fulfilled](state, action) {
//       state.loader = false;
//       state.products = action.payload;
//     },
//     [fetchProducts.rejected](state, { payload }) {
//       state.error = payload;
//       state.loader = false;
//     },
//   },
// });

// With createApi-------------------------------
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
});

export const { addToCart, removeFromCart } = sliceProducts.actions;
