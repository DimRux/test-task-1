import React from 'react';
import { useState } from 'react';
import uniqueId from 'lodash/uniqueId.js';
import { Footer } from './Footer';
import { Header } from './Header';
import { Form } from './PayComponents/Form';

export const Pay = () => {
  const [languages, setLanguages] = useState([{ name: 'Каз', id: uniqueId(), active: false }, { name: 'Рус', id: uniqueId(), active: true }, { name: 'Eng', id: uniqueId(), active: false }]);
  const style = { name: 'footer-v2' };

  return (
    <div>
      <Header />
      <div className="container-form">
        <Form />
      </div>
      <Footer languages={languages} setLanguages={setLanguages} style={style} />
    </div>
  );
};