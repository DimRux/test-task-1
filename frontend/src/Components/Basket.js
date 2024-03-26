import React from 'react';
import uniqueId from 'lodash/uniqueId.js';
import { ReactComponent as IconPlus } from '../icons/plus.svg'
import { ReactComponent as IconMinus } from '../icons/minus.svg'
import { ReactComponent as IconDel } from '../icons/del.svg'
import { Footer } from './Footer';
import { Header } from './Header';
import { useSelector, useDispatch } from 'react-redux';
import { plusOneProduct, minusOneProduct, clearBuyProducts, clearCountProduct } from '../slices/basketSlice';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const BasketProduct = ({ img, title, price, count, id }) => {
  const dispatch = useDispatch();
  const plusProduct = () => dispatch(plusOneProduct({ id }));
  const minusProduct = () => dispatch(minusOneProduct({ id }));
  
  const clearAllCountProduct = () => dispatch(clearCountProduct({ id }));

  return (
    <div className='buyProduct'>
      <div>
        <div className='img-container-basket'>
          <img src={img} alt={`product ${title}`} className='img-buyProduct' />
        </div>

        <div className='change-count'>
          <IconMinus onClick={minusProduct} className='icon-basket-effect' />
          <span className='margin-left-25'>{count}</span>
          <IconPlus onClick={plusProduct} className='margin-left-25 icon-basket-effect' />
        </div>
      </div>
      <div className='container-title-price'>
        <div className='title-basket'>{title}</div>
        <div className='price-basket'>{price}</div>
      </div>
      <div className='container-del-price'>
        <IconDel onClick={clearAllCountProduct} className='del-basket icon-basket-effect' />
        <div className='second-price-basket' >{price}</div>
      </div>
    </div>
  )
}

export const Basket = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { buyProducts, cash } = useSelector((state) => state.basket);
  const clearBasket = () => dispatch(clearBuyProducts());
  const [languages, setLanguages] = useState([{ name: 'Каз', id: uniqueId(), active: false }, { name: 'Рус', id: uniqueId(), active: true }, { name: 'Eng', id: uniqueId(), active: false }]);
  const style = {name: 'footer-v2'};

  return (
    <>
      <Header />
      <main>

        <div className='backet-container'>
          <div className='buyProducts-container'>
            <div>{t('basket')}</div>
            {buyProducts.map(({ img, title, price, id, count }) => <BasketProduct img={img} title={title} price={price} count={count} id={id} key={id} />)}
          </div>
          <div className='buy-container'>
            <div className='height-120px'>
              <div className='finally-price'>
                <div className='margin-left-21'>{t('inTotal')}</div>
                <div className='margin-right-16'>{cash}</div>
              </div>
              <button className='button margin-top-15'>{t('buyButton')}</button>
            </div>
            {buyProducts.length === 0 ? null : <button onClick={clearBasket} className='button margin-top-35'>{t('resetButton')}</button>}
          </div>
        </div>
      </main>
      <Footer languages={languages} setLanguages={setLanguages} style={style} />
    </>
  )
}