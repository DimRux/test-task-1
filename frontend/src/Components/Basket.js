import React from 'react';
import uniqueId from 'lodash/uniqueId.js';
import { useNavigate } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import { useSelector, useDispatch } from 'react-redux';
import { clearBuyProducts } from '../slices/basketSlice';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { BasketProduct } from './BasketComponents/BasketProduct';

export const Basket = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { buyProducts, cash } = useSelector((state) => state.basket);
  const clearBasket = () => dispatch(clearBuyProducts());
  const [languages, setLanguages] = useState([{ name: 'Каз', id: uniqueId(), active: false }, { name: 'Рус', id: uniqueId(), active: true }, { name: 'Eng', id: uniqueId(), active: false }]);
  const style = { name: 'footer-v2' };

  const onClickPay = () => navigate('/pay');

  return (
    <>
      <Header />
      <main>
        <div className='backet-container'>
          <div>
            <div>{t('basket')}</div>
            {buyProducts.map(({ img, title, price, id, count }) => <BasketProduct img={img} title={title} price={price} count={count} id={id} key={id} />)}
          </div>
          <div className='buy-container'>
            <div className='height-120px'>
              <div className='finally-price'>
                <div className='margin-left-21'>{t('inTotal')}</div>
                <div className='margin-right-16'>{cash}</div>
              </div>
              {cash ? <button className='button margin-top-15' onClick={onClickPay}>{t('buyButton')}</button> : <button disabled className='button-dis margin-top-15' onClick={onClickPay}>{t('buyButton')}</button>}
            </div>
            {buyProducts.length === 0 ? null : <button onClick={clearBasket} className='button margin-top-35'>{t('resetButton')}</button>}
          </div>
        </div>
      </main>
      <Footer languages={languages} setLanguages={setLanguages} style={style} />
    </>
  )
}