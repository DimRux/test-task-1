import { ReactComponent as IconVK } from '../icons/VK.svg'
import { ReactComponent as IconTelegram } from '../icons/Telegram.svg'
import { ReactComponent as IconWhatsapp } from '../icons/Whatsapp.svg'
import { ReactComponent as IconBrouser } from '../icons/Brouser.svg'


export const Footer = () => {
    return (
      <footer>
        <div className='footer-container'>
          <span className='logo-footer'>QPICK</span>
          <div className='links-groups'>
            <div className='links-group-one'>
              <div>Избранное</div>
              <div>Корзина</div>
              <div>Контакты</div>
            </div>
            <div className='links-group-two'>
              <div className='margin-left-2'>Условия сервиса</div>
              <div className='flex-center'>
                <IconBrouser />
                <span className='margin-left-17 int-ru'>Рус</span>
                <span className='margin-left-17 int-en'>Eng</span>
              </div>
            </div>
          </div>
          <div className='social'>
            <IconVK className='margin-right-18' />
            <IconTelegram className='margin-right-18' />
            <IconWhatsapp />
          </div>
        </div>
      </footer>
    )
  }