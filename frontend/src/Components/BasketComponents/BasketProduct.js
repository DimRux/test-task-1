import React from 'react';
import { ReactComponent as IconPlus } from '../../icons/plus.svg'
import { ReactComponent as IconMinus } from '../../icons/minus.svg'
import { ReactComponent as IconDel } from '../../icons/del.svg'
import { useDispatch } from 'react-redux';
import { plusOneProduct, minusOneProduct, clearCountProduct } from '../../slices/basketSlice';

export const BasketProduct = ({ img, title, price, count, id }) => {
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
        <div className='second-price-basket' >{price * count}</div>
      </div>
    </div>
  )
}