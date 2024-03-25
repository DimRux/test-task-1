import { ReactComponent as IconLike } from '../icons/Like.svg'
import { ReactComponent as IconBasket } from '../icons/Basket.svg'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { plusLike } from '../slices/likeSlice';



export const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const buyProducts = useSelector((state) => state.basket.buyProducts);
    const { likeNeoflex } = useSelector((state) => state.like);
    const count = buyProducts.reduce((acc, item) => acc += item.count, 0);
    const onClickBasket = () => navigate('/basket');
    const onClickLogo = () => navigate('/');

    const appLikeForNeoflex = () => dispatch(plusLike());

    return (
      <header>
        <nav>
          <div onClick={onClickLogo} className="logo hover">QPICK</div>
          <div className='nav-icons-container'>
            <IconLike onClick={appLikeForNeoflex} className='nav-icons like-icon icon-effect' />
            {likeNeoflex === 0 ? null : <div className='icon-like-count'>{likeNeoflex}</div>}
            <IconBasket onClick={onClickBasket} className='nav-icons icon-effect' />
            {count === 0 ? null :<div className='icon-basket-count'>{count}</div>}
          </div>
        </nav>
      </header>
    )
  }