import React from 'react';
import { useSelector } from 'react-redux';
import uniqueId from 'lodash/uniqueId.js';
import { Footer } from './Footer';
import { Header } from './Header';
import { useState } from 'react';
import { Categories } from './CatalogComponents/Categories';


export const Catalog = () => {
  const categories = useSelector((state) => state.products.categories);
  const [languages, setLanguages] = useState([{ name: 'Рус', id: uniqueId(), active: true }, { name: 'Eng', id: uniqueId(), active: false }]);
  const style = { name: 'footer-v1' };

  return (
    <div className='container'>
      <div>
        <Header />
        <main>
          <div className='main-catalog'>
            {categories.map(({ name, catId }) => <Categories name={name} catId={catId} key={catId} />)}
          </div>
        </main>
        <Footer languages={languages} setLanguages={setLanguages} style={style} />
      </div>
    </div>
  )
}