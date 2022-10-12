import { configureStore } from '@reduxjs/toolkit';
import { sliceProducts } from './slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productsApi } from './rtkQuery/rtkQuery';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, sliceProducts.reducer);

export const store = configureStore({
  // Without createApi-------------------------------
  // reducer: persistedReducer,

  // With createApi-------------------------------
  reducer: {
    cart: persistedReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },

  // With createApi-------------------------------
  middleware: gedDefaultMiddlewares =>
    gedDefaultMiddlewares({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productsApi.middleware),

  // Without createApi-------------------------------
  // middleware: gedDefaultMiddlewares =>
  //   gedDefaultMiddlewares({
  //     serializableCheck: {
  //       ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);
