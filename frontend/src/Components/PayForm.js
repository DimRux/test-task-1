import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import uniqueId from 'lodash/uniqueId.js';
import { Footer } from './Footer';
import { Header } from './Header';

export const PayForm = () => {
  const [languages, setLanguages] = useState([{ name: 'Каз', id: uniqueId(), active: false }, { name: 'Рус', id: uniqueId(), active: true }, { name: 'Eng', id: uniqueId(), active: false }]);
  const style = { name: 'footer-v2' };

  const formik = useFormik({
    initialValues: {
      number: "",
      expiry: "",
      cvc: "",
    },
    validationSchema: Yup.object({
      number: Yup.string()
        .required("Номер карты обязателен")
        .matches(/^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/, "Неверный номер карты"),
      expiry: Yup.string()
        .required("Срок действия обязателен")
        .matches(
          /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
          "Неверный срок действия"
        ),
      cvc: Yup.string()
        .required("CVC-код обязателен")
        .matches(/^[0-9]{3}$/, "Неверный CVC-код"),
    }),
    onSubmit: (values) => {
      // Отправка данных формы
    },
  });

  return (
    <div>
      <Header />
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="number">Номер карты:</label>
            <input
              type="text"
              name="number"
              value={formik.values.number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              inputMode="numeric"
              maxLength="19"
              pattern="[0-9]*"
              onInput={(e) => {
                e.target.value = e.target.value
                  .replace(/[^\d]/g, '')
                  .replace(/(.{4})/g, '$1 ')
                  .trim();
              }}
            />
            {formik.touched.number && formik.errors.number ? (
              <div className="error">{formik.errors.number}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="expiry">Срок действия:</label>
            <input
              type="text"
              name="expiry"
              value={formik.values.expiry}
              onChange={(e) => {
                formik.setFieldValue('expiry', e.target.value);
                if (e.target.value.length === 2) {
                  formik.setFieldValue('expiry', e.target.value + '/');
                }
              }}
              onBlur={formik.handleBlur}
              maxLength="5"
            />
            {formik.touched.expiry && formik.errors.expiry ? (
              <div className="error">{formik.errors.expiry}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="cvc">CVC-код:</label>
            <input
              type="password"
              name="cvc"
              value={formik.values.cvc}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              maxLength="3"
            />
            {formik.touched.cvc && formik.errors.cvc ? (
              <div className="error">{formik.errors.cvc}</div>
            ) : null}
          </div>

          <div className='button-container'>
            <button type='button' className='button-pay'>В корзину</button>
            <button type="submit" className='button-pay'>Отправить</button>
          </div>
        </form>
      </div>
      <Footer languages={languages} setLanguages={setLanguages} style={style} />
    </div>
  );
};