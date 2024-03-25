import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice.js';
import basketReducer from './basketSlice.js';
import likeReducer from './likeSlice.js'


export default configureStore({
  reducer: {
    products: productsReducer,
    basket: basketReducer,
    like: likeReducer,
  },
});