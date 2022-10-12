import { createSelector } from '@reduxjs/toolkit';

// // Without createApi-------------------------------
// export const getProductsSelector = state => {
//   return state.products;
// };
// export const getCartsSelector = state => {
//   return state.cart;
// };
// export const getLoaderSelector = state => {
//   return state.loader;
// };
// export const getErrorSelector = state => {
//   return state.error;
// };

// With createApi-------------------------------
export const getCartsSelector = state => {
  return state.cart.cart;
};
export const getLoaderSelector = state => {
  return state.cart.loader;
};
export const getErrorSelector = state => {
  return state.cart.error;
};

export const readyToOrderProducts = total =>
  createSelector([getCartsSelector], inCart => {
    return `There are ${inCart?.length || 0} goods from total of ${
      total?.length
    } goods in your cart!`;
  });
//   ------------------------------------------------

// Without createApi-------------------------------
// export const readyToOrderProducts = state => {
//   return `There are ${getCartsSelector(state).length} goods from total of ${
//     getProductsSelector(state).length
//   } goods in your cart!`;
// };

//     export const readyToOrderProducts = createSelector(
//       [getProductsSelector, getCartsSelector],
//       (total, inCart) => {
//         return `There are ${inCart.length} goods from total of ${total.length} goods in your cart!`;
//         }

//       return `There are ${getCartsSelector(state).length} goods from total of ${
//         getProductsSelector(state).length
//       } goods in your cart!`;
//   );
