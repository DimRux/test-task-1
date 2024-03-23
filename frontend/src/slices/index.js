import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice.js';
import basketReducer from './basketSlice.js';

export default configureStore({
  reducer: {
    products: productsReducer,
    basket: basketReducer,
  },
});