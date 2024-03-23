import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      const { product } = payload;
      state.products.push(product);
    },
  },
});

export const { addProduct } = productsSlice.actions;

export default productsSlice.reducer;