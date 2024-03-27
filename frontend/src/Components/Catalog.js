import React from 'react';
import { ReactComponent as IconStar } from '../icons/Star.svg'
import { ReactComponent as IconInfo } from '../icons/info.svg'
import { useSelector, useDispatch } from 'react-redux';
import uniqueId from 'lodash/uniqueId.js';
import { Footer } from './Footer';
import { Header } from './Header';
import { addBuyProduct } from '../slices/basketSlice';
import { useState } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


const Product = ({ img, title, price, beforePrice, rate, id, description }) => {
  const dispatch = useDispatch();
  const clickBuy = () => {
    const buyProduct = { img, title, price, id };
    dispatch(addBuyProduct(buyProduct));
  }

  const getInfo = () => {
    Swal.fire({
      imageUrl: img,
      title,
      text: description,
      imageHeight: 179,
      imageWidth: 219,
      imageAlt: title
    });
  }

  return (
    <div className='product'>
      <div className='img-center'>
        <img src={img} alt={`product ${title}`} className='img-product' />
        <IconInfo onClick={getInfo} className='info icon-effect' />
      </div>
      <div className='title-price'>
        <span className='title'>{title}</span>
        <span className='price'>{`${price} P`}</span>
        {beforePrice ? <span className='before-price'>{`${beforePrice} P`}</span> : null}
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
        {products.map(({ img, title, price, beforePrice, rate, id, description }) => <Product img={img} title={title} price={price} beforePrice={beforePrice} rate={rate} id={id} key={id} description={description} />)}
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