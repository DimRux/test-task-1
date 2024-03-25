import React from 'react';
import uniqueId from 'lodash/uniqueId.js';
import { ReactComponent as IconPlus } from '../icons/plus.svg'
import { ReactComponent as IconMinus } from '../icons/minus.svg'
import { ReactComponent as IconDel } from '../icons/del.svg'
import { Footer } from './Footer';
import { Header } from './Header';
import { useSelector } from 'react-redux';

const BasketProduct = ({ img, title, price, count, id }) => {
  return (
    <div className='buyProduct'>
      <div>
        <div className='img-container-basket'>
          <img src={img} alt={`product ${title}`} className='img-buyProduct' />
        </div>
        
        <div className='change-count'>
          <IconMinus />
          <span className='margin-left-25'>{count}</span>
          <IconPlus className='margin-left-25' />
        </div>
      </div>
      <div className='container-title-price'>
        <div className='title-basket'>{title}</div>
        <div className='price-basket'>{price}</div>
      </div>
      <div className='container-del-price'>
        <IconDel className='del-basket' />
        <div className='second-price-basket' >{price}</div>
      </div> 
    </div>
  )
}

export const Basket = () => {
  const { buyProducts, cash } = useSelector((state) => state.basket);
  const languages = [{ name: 'Каз', id: uniqueId(), active: false }, { name: 'Рус', id: uniqueId(), active: true }, { name: 'Eng', id: uniqueId(), active: false }];

  return (
    <>
      <Header />
      <main>

        <div className='backet-container'>
          <div className='buyProducts-container'>
            <div>Корзина</div>
            {buyProducts.map(({ img, title, price, id, count }) => <BasketProduct img={img} title={title} price={price} count={count} id={id} key={id} />)}
          </div>
          <div className='buy-container'>
            <div className='finally-price'>
              <div className='margin-left-21'>ИТОГО</div>
              <div className='margin-right-16'>{cash}</div>
            </div>
            <button className='button margin-top-15'>Перейти к оформлению</button>
          </div>
        </div>
      </main>
      <Footer languages={languages} />
    </>
  )
}