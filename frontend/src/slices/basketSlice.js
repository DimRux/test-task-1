import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  buyProducts: [],
};

const productsSlice = createSlice({
  name: 'buyProducts',
  initialState,
  reducers: {
    addBuyProduct: (state, { payload }) => {
      const { product } = payload;
      state.buyProductsroducts.push(product);
    },
  },
});

export const { addBuyProduct } = productsSlice.actions;

export default productsSlice.reducer;