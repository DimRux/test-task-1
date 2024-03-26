import React, { useRef } from 'react';
import { ReactComponent as IconVK } from '../icons/VK.svg'
import { ReactComponent as IconTelegram } from '../icons/Telegram.svg'
import { ReactComponent as IconWhatsapp } from '../icons/Whatsapp.svg'
import { ReactComponent as IconBrouser } from '../icons/Brouser.svg'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


export const Footer = ({ languages, setLanguages, style }) => {
  const scrollToTopRef = useRef();
  const { t, i18n } = useTranslation();

  const changeLg = (e) => {
    switch (e.target.dataset.lang) {
      case 'Eng':
        i18n.changeLanguage('en');
        const newLanguagesEn = languages.map(({ name, id }) => name === 'Eng' ? { name, id, active: true } : { name, id, active: false });
        setLanguages(newLanguagesEn);
        break;
  
      case 'Рус':
        i18n.changeLanguage('ru');
        const newLanguagesRu = languages.map(({ name, id }) => name === 'Рус' ? { name, id, active: true } : { name, id, active: false });
        setLanguages(newLanguagesRu);
        break;
  
      case 'Каз':
        i18n.changeLanguage('kz');
        const newLanguages = languages.map(({ name, id }) => name === 'Каз' ? { name, id, active: true } : { name, id, active: false });
        setLanguages(newLanguages);
        break;
  
      default:
        break;
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={style.name}>
      <div className='footer-container'>
        <span ref={scrollToTopRef} onClick={scrollToTop} className='logo-footer hover'>QPICK</span>
        <div className='links-groups'>
          <div className='links-group-one'>
            <a href='https://www.neoflex.ru/' className='hover'>{t('favorites')}</a>
            <Link to='/basket' className='hover'>{t('basket')}</Link>
            <a href='https://www.neoflex.ru/contacts' className='hover'>{t('contacts')}</a>
          </div>
          <div className='links-group-two'>
            <a href='https://www.neoflex.ru/about/career' className='margin-left-2 hover'>{t('сonditions')}</a>
            <div className='flex'>
              <a href='https://www.google.com/'><IconBrouser className='icon-effect' /></a>
              {languages.map(({ name, id, active }) => (
                active ? (
                  <span onClick={changeLg} data-lang={name} className='margin-left-17 int-active pointer' key={id}>{name}</span>
                ) : (
                  <span onClick={changeLg} data-lang={name} className='margin-left-17 int-notActive pointer' key={id}>{name}</span>
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