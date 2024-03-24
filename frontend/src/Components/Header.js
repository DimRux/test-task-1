import { ReactComponent as IconLike } from '../icons/Like.svg'
import { ReactComponent as IconBasket } from '../icons/Basket.svg'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate();
    const buyProducts = useSelector((state) => state.basket.buyProducts);
    const onClickBasket = () => navigate('/basket');
    const onClickLogo = () => navigate('/');

    return (
      <header>
        <nav>
          <div onClick={onClickLogo} className="logo hover">QPICK</div>
          <div className='nav-icons-container'>
            <IconLike className='nav-icons like-icon' />
            <div className='icon-badge'>1</div>
            <IconBasket onClick={onClickBasket} className='nav-icons'></IconBasket>
            <div className='icon-badge'>
                {buyProducts.length}
            </div>
          </div>
        </nav>
      </header>
    )
  }