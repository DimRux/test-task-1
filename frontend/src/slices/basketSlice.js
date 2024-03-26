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
      const { id } = payload;
      const product = state.buyProducts.find(
        (item) => item.id === id,
      );
      if (product) {
        product.count += 1;
        state.cash += product.price;
      } else {
        state.buyProducts.push({ ...payload, count: 1 });
        state.cash += payload.price;
      }
    },
    plusOneProduct: (state, { payload }) => {
      const { id } = payload;
      const product = state.buyProducts.find(
        (item) => item.id === id,
      );
      product.count += 1;
      state.cash += product.price;
    },
    minusOneProduct: (state, { payload }) => {
      const { id } = payload;
      const product = state.buyProducts.find(
        (item) => item.id === id,
      );
      if (product.count !== 1) {
        product.count -= 1;
        state.cash -= product.price;
      } else {
        const newBuyProducts = state.buyProducts.filter((item) => item.id !== id);
        state.buyProducts = newBuyProducts;
        if (payload.price) {
          state.cash -= payload.price;
        } else state.cash = 0
      }
    },
    clearBuyProducts: (state) => {
      state.buyProducts = initialState.buyProducts;
      state.cash = initialState.cash;
    },
    clearCountProduct: (state, { payload }) => {
      const { id } = payload;
      const product = state.buyProducts.find(
        (item) => item.id === id,
      );
      const newBuyProducts = state.buyProducts.filter((item) => item.id !== id);
      state.buyProducts = newBuyProducts;
      state.cash -= product.price * product.count;
    },
  },
});

export const { addBuyProduct, plusOneProduct, minusOneProduct, clearBuyProducts, clearCountProduct } = productsSlice.actions;

export default productsSlice.reducer;