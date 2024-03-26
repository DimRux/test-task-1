import React from 'react';
import { ReactComponent as IconStar } from '../icons/Star.svg'
import { useSelector, useDispatch } from 'react-redux';
import uniqueId from 'lodash/uniqueId.js';
import { Footer } from './Footer';
import { Header } from './Header';
import { addBuyProduct } from '../slices/basketSlice';
import { useState } from 'react';



const Product = ({ img, title, price, rate, id }) => {
  const dispatch = useDispatch();
  const clickBuy = () => {
    const buyProduct = { img, title, price, id };
    dispatch(addBuyProduct(buyProduct));
  }

  return (
    <div className='product'>
      <div className='img-center'>
        <img src={img} alt={`product ${title}`} className='img-product' />
      </div>
      <div className='title-price'>
        <span className='title'>{title}</span>
        <span className='price'>{`${price} P`}</span>
      </div>
      <div className='icon-rate'>
        <div className='flex-center'>
          <IconStar />
          <span className='rate'>{rate}</span>
        </div>
        <button href='#' onClick={clickBuy} className='buy hover'>Купить</button>
      </div>
    </div>
  )
}

const Categories = ({ name, catId }) => {
  const allProducts = useSelector((state) => state.products.products);
  const products = allProducts.filter((item) => item.catId === catId);

  return (
    <div className='catalog-container'>
      <h3 className='catalog-name'>{name}</h3>
      <div className='products-container'>
        {products.map(({ img, title, price, rate, id }) => <Product img={img} title={title} price={price} rate={rate} id={id} key={id} />)}
      </div>
    </div>
  )
}

export const Catalog = () => {
  const categories = useSelector((state) => state.products.categories);
  const [languages, setLanguages] = useState([{ name: 'Рус', id: uniqueId(), active: true }, {name: 'Eng', id: uniqueId(), active: false }]);
  const style = {name: 'footer-v1'};

  return (
    <>
      <Header />
      <main>
        <div className='main-catalog'>
          {categories.map(({ name, catId }) => <Categories name={name} catId={catId} key={catId} />)}
        </div>
      </main>
      <Footer languages={languages} setLanguages={setLanguages} style={style}/>
    </>
  )
}