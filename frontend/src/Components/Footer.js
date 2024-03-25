import React, { useRef } from 'react';
import { ReactComponent as IconVK } from '../icons/VK.svg'
import { ReactComponent as IconTelegram } from '../icons/Telegram.svg'
import { ReactComponent as IconWhatsapp } from '../icons/Whatsapp.svg'
import { ReactComponent as IconBrouser } from '../icons/Brouser.svg'
import { Link } from 'react-router-dom';


export const Footer = ({ languages }) => {
  const scrollToTopRef = useRef();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer>
      <div className='footer-container'>
        <span ref={scrollToTopRef} onClick={scrollToTop} className='logo-footer hover'>QPICK</span>
        <div className='links-groups'>
          <div className='links-group-one'>
            <a href='https://www.neoflex.ru/' className='hover'>Избранное</a>
            <Link to='/basket' className='hover'>Корзина</Link>
            <a href='https://www.neoflex.ru/contacts' className='hover'>Контакты</a>
          </div>
          <div className='links-group-two'>
            <a href='https://www.neoflex.ru/about/career' className='margin-left-2 hover'>Условия сервиса</a>
            <div className='flex'>
              <a href='https://www.google.com/'><IconBrouser className='icon-effect' /></a>
              {languages.map(({ name, id, active }) => (
                active ? (
                  <span className='margin-left-17 int-active pointer' key={id}>{name}</span>
                ) : (
                  <span className='margin-left-17 int-notActive pointer' key={id}>{name}</span>
                )
              ))}
            </div>
          </div>
        </div>
        <div className='social'>
          <a href='https://vk.com/'><IconVK className='margin-right-18 icon-effect' /></a>
          <a href='https://web.telegram.org/'><IconTelegram className='margin-right-18 icon-effect' /></a>
          <a href='https://www.whatsapp.com/'><IconWhatsapp className='icon-effect' /></a>
        </div>
      </div>
    </footer>
  )
}