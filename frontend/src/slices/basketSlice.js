import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  buyProducts: [],
  cash: 0,
};

const productsSlice = createSlice({
  name: 'buyProducts',
  initialState,
  reducers: {
    addBuyProduct: (state, { payload }) => {
      console.log(payload);
      const { id } = payload;
      const product = state.buyProducts.find(
        (item) => item.id === id,
      );
      if (product) {
        product.count += 1;
        state.cash += product.price;
      } else state.buyProducts.push({ ...payload, count: 1 });
    },
  },
});

export const { addBuyProduct } = productsSlice.actions;

export default productsSlice.reducer;