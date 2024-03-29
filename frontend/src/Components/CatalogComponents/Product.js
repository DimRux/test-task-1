import React from 'react';
import { ReactComponent as IconStar } from '../../icons/Star.svg'
import { ReactComponent as IconInfo } from '../../icons/info.svg'
import { useDispatch } from 'react-redux';
import { addBuyProduct } from '../../slices/basketSlice';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


export const Product = ({ img, title, price, beforePrice, rate, id, description }) => {
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