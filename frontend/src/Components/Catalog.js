import { ReactComponent as IconLike } from '../icons/Like.svg'
import { ReactComponent as IconBasket } from '../icons/Basket.svg'

export const Catalog = () => (
    <>
    <nav>
      <div className="logo">QPICK</div>
      <div className='nav-icons-container'>
        <IconLike className='nav-icons like-icon' />
        <div className='icon-badge'>1</div>
        <IconBasket className='nav-icons'></IconBasket>
        <div className='icon-badge'>2</div>
      </div>
    </nav>
    <main>
      content
    </main>
    </>
)