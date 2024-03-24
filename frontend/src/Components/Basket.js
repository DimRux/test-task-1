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
      <img src={img} alt={`product ${title}`} className='img-buyProduct' />
      <div className='change-count'>
        <IconMinus />
        <span className='margin-left-25'>{count}</span>
        <IconPlus className='margin-left-25' />
      </div>
      </div>
      <div>
        <div>{title}</div>
        <div>{price}</div>
      </div>
      <div>
        <IconDel />
        <div>{price}</div>
      </div>
    </div>
  )
}

export const Basket = () => {
  const { buyProducts, cash } = useSelector((state) => state.basket);

  return (
    <>
      <Header />
      <main>
      
      <div className='backet-container'>
        <div className='buyProducts-container'>
          <div>Корзина</div>
          {buyProducts.map(({img, title, price, id, count}) => <BasketProduct img={img} title={title} price={price} count={count} id={id} key={id} />)}
        </div>
        <div>
          buy content {cash}
        </div>
      </div>
      </main>
      <Footer />
    </>
  )
}