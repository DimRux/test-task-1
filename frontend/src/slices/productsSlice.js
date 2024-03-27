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
    { img: img1, title: 'Apple BYZ S8521', price: 2927, beforePrice: 3527, rate: 4.7, catId: oneId, id: uniqueId(), description: 'BYZ S852 - проводное аудиоустройство, благодаря которому можно прослушивать любимую музыку, не мешая окружающим. Вставные вакуумные амбушюры обладают высокой степенью звукоизоляции, что исключает образование посторонних шумов. Наушники имеют хорошие акустические параметры: сопротивление равняется 32 Ом ± 15 Ом. Размер динамика: 14,2 мм. Максимальная входная мощность: 10 мВт. Длина провода: 125 ± 0,3 см.'},
    { img: img2, title: 'Apple EarPods', price: 2327, beforePrice: null, rate: 4.5, catId: oneId, id: uniqueId(), description: 'Наушники Apple EarPods (jack 3,5) разработаны специально для молодых людей, ведущих активный и спортивный образ жизни. Действительно, благодаря оригинальной и надежной конструкции устройства никогда не выпадут из ушей, даже при особо интенсивных движениях. Это идеальный вариант для пробежки, занятий экстремальными видами спорта или в тренажерном зале.'},
    { img: img3, title: 'Apple EarPods', price: 2327, beforePrice: null, rate: 4.5, catId: oneId, id: uniqueId(), description: 'Наушники Apple EarPods (jack 3,5) разработаны специально для молодых людей, ведущих активный и спортивный образ жизни. Действительно, благодаря оригинальной и надежной конструкции устройства никогда не выпадут из ушей, даже при особо интенсивных движениях. Это идеальный вариант для пробежки, занятий экстремальными видами спорта или в тренажерном зале.'},
    { img: img1, title: 'Apple BYZ S8521', price: 2927, beforePrice: null, rate: 4.7, catId: oneId, id: uniqueId(), description: 'BYZ S852 - проводное аудиоустройство, благодаря которому можно прослушивать любимую музыку, не мешая окружающим. Вставные вакуумные амбушюры обладают высокой степенью звукоизоляции, что исключает образование посторонних шумов. Наушники имеют хорошие акустические параметры: сопротивление равняется 32 Ом ± 15 Ом. Размер динамика: 14,2 мм. Максимальная входная мощность: 10 мВт. Длина провода: 125 ± 0,3 см.'},
    { img: img2, title: 'Apple EarPods', price: 2327, beforePrice: null, rate: 4.5, catId: oneId, id: uniqueId(), description: 'Наушники Apple EarPods (jack 3,5) разработаны специально для молодых людей, ведущих активный и спортивный образ жизни. Действительно, благодаря оригинальной и надежной конструкции устройства никогда не выпадут из ушей, даже при особо интенсивных движениях. Это идеальный вариант для пробежки, занятий экстремальными видами спорта или в тренажерном зале.'},
    { img: img3, title: 'Apple EarPods', price: 2327, beforePrice: null, rate: 4.5, catId: oneId, id: uniqueId(), description: 'Наушники Apple EarPods (jack 3,5) разработаны специально для молодых людей, ведущих активный и спортивный образ жизни. Действительно, благодаря оригинальной и надежной конструкции устройства никогда не выпадут из ушей, даже при особо интенсивных движениях. Это идеальный вариант для пробежки, занятий экстремальными видами спорта или в тренажерном зале.'},
    { img: img4, title: 'Apple AirPods', price: 9527, beforePrice: null, rate: 4.7, catId: twoId, id: uniqueId(), description: 'AirPods полностью изменят ваше представление об использовании беспроводных наушников. Достаньте их из футляра — и они уже готовы к работе с iPhone, Apple Watch, iPad или Mac.'},
    { img: img5, title: 'GERLAX GH-04', price: 6527, beforePrice: null, rate: 4.7, catId: twoId, id: uniqueId(), description: 'Беспроводные стерео наушники Gerlax GH-04 отличного качества сборки из пластика, очень мягкие подушки звукоизоляции, благодаря которым очень хорошо подавляются внешние шумы и не устают уши при длительном использовании.'},
    { img: img6, title: 'BOROFONE BO4', price: 7527, beforePrice: null, rate: 4.7, catId: twoId, id: uniqueId(), description: 'Беспроводные наушники BOROFONE BO4 WIRELESS HEADFONES идеально подходят для тех, кто хочет наслаждаться высококачественным звуком в пути, будь то поездка на работу, путешествие, тренировка или просто отдых дома.'},
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