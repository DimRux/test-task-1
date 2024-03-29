import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useTranslation } from 'react-i18next';
import { clearBuyProducts } from '../../slices/basketSlice';


export const Form = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { cash } = useSelector((state) => state.basket);

  const onClickBack = () => navigate('/basket');

  const formik = useFormik({
    initialValues: {
      number: "",
      userName: "",
      expiry: "",
      cvc: "",
    },
    validationSchema: Yup.object({
      number: Yup.string()
        .required("Номер карты обязателен")
        .matches(/^[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/, "Неверный номер карты"),
      userName: Yup.string()
        .required("Имя и фамилия обязательны")
        .test('has-space', 'В имени и фамилии должен быть хотя бы один пробел', (value) => {
          return value.includes(' ');
        }),
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
      try {
        navigate('/');
        dispatch(clearBuyProducts());
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Товар куплен",
          showConfirmButton: false,
          timer: 2000
        });
      } catch (e) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Ошибка сети",
          showConfirmButton: false,
          timer: 2000
        });
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label htmlFor="number">{t('pay.cardNumber')}</label>
        <input
          type="text"
          name="number"
          value={formik.values.number}
          onChange={(e) => {
            e.target.value = e.target.value
              .replace(/[^\d]/g, '')
              .replace(/(.{4})/g, '$1 ')
              .trim();
            formik.handleChange(e);
          }}
          onBlur={formik.handleBlur}
          maxLength="19"
          placeholder='0000 0000 0000 0000'
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
        <label htmlFor="userName">{t('pay.name')}</label>
        <input
          type="text"
          name="userName"
          value={formik.values.userName}
          onChange={(e) => {
            formik.handleChange(e);
            formik.setFieldValue('userName', e.target.value.toUpperCase());
          }}
          onBlur={formik.handleBlur}
          placeholder='Medvedeva Olga'
          onInput={(e) => {
            e.target.value = e.target.value.toUpperCase();
          }}
        />
        {formik.touched.userName && formik.errors.userName ? (
          <div className="error">{formik.errors.userName}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="expiry">{t('pay.validity')}</label>
        <input
          type="text"
          name="expiry"
          value={formik.values.expiry}
          placeholder='04/24'
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
        <label htmlFor="cvc">{t('pay.cvc')}</label>
        <input
          type="password"
          name="cvc"
          value={formik.values.cvc}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder='123'
          maxLength="3"
        />
        {formik.touched.cvc && formik.errors.cvc ? (
          <div className="error">{formik.errors.cvc}</div>
        ) : null}
      </div>

      <div className='button-container'>
        <button type='button' className='button-pay' onClick={onClickBack}>{t('pay.basket')}</button>
        <button type="submit" className='button-pay'>{t('pay.pay')} {`${cash} P`}</button>
      </div>
    </form>

  );
}