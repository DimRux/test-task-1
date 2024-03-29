import React from 'react';
import { useSelector } from 'react-redux';
import { Product } from './Product';

export const Categories = ({ name, catId }) => {
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