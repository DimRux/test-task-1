import { createSlice } from '@reduxjs/toolkit';
import uniqueId from 'lodash/uniqueId.js';
import img1 from '../images/Image1.png'
import img2 from '../images/Image2.png'
import img3 from '../images/Image3.png'
import img4 from '../images/Image4.png'
import img5 from '../images/Image5.png'
import img6 from '../images/Image6.png'

const oneId = uniqueId();
const twoId = uniqueId();

const initialState = {
  products: [
    { img: img1, title: 'Apple BYZ S8521', price: 2927, rate: 4.7, catId: oneId, id: uniqueId()},
    { img: img2, title: 'Apple EarPods', price: 2327, rate: 4.5, catId: oneId, id: uniqueId()},
    { img: img3, title: 'Apple EarPods', price: 2327, rate: 4.5, catId: oneId, id: uniqueId()},
    { img: img1, title: 'Apple BYZ S8521', price: 2927, rate: 4.7, catId: oneId, id: uniqueId()},
    { img: img2, title: 'Apple EarPods', price: 2327, rate: 4.5, catId: oneId, id: uniqueId()},
    { img: img3, title: 'Apple EarPods', price: 2327, rate: 4.5, catId: oneId, id: uniqueId()},
    { img: img4, title: 'Apple AirPods', price: 9527, rate: 4.7, catId: twoId, id: uniqueId()},
    { img: img5, title: 'GERLAX GH-04', price: 6527, rate: 4.7, catId: twoId, id: uniqueId()},
    { img: img6, title: 'BOROFONE BO4', price: 7527, rate: 4.7, catId: twoId, id: uniqueId()},
  ],
  categories: [{ name: 'Наушники', catId: oneId}, { name: 'Беспроводные наушники', catId: twoId}]
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