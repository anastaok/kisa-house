import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import Button from "../Button";
import "./CartForm.scss";

const CartForm = () => {
  return (
    <Formik
      initialValues={{
        fullName: "",
        telephone: "",
        email: "",
        text: "",
      }}
      validationSchema={Yup.object({
        fullName: Yup.string()
          .min(3, "Не менее 3 символов")
          .required("Обязательно к заполнению"),
        telephone: Yup.string()
          .min(11, "Укажите номер телефона с 8")
          .max(11, "Укажите номер телефона с 8")
          .required("Обязательно к заполнению"),
        email: Yup.string()
          .email("Неверно указан e-mail")
          .required("Обязательно к заполнению"),
      })}
      onSubmit={(values) => {
        console.log("SUBMIT", values);
      }}
    >
      {(formik) => (
        <div className="containerForm">
          <form className="formCart" onSubmit={formik.handleSubmit}>
            <strong>Оставьте Ваши контакты:</strong>
            <label className="contentForm">ФИО</label>
            <input
              className="formData"
              id="fullName"
              type="text"
              placeholder="Иванов Иван Иванович"
              {...formik.getFieldProps("fullName")}
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <div>{formik.errors.fullName}</div>
            ) : null}

            <label className="contentForm">Телефон</label>
            <input
              className="formData"
              id="telephone"
              type="tel"
              placeholder="89000000000"
              {...formik.getFieldProps("telephone")}
            />
            {formik.touched.telephone && formik.errors.telephone ? (
              <div>{formik.errors.telephone}</div>
            ) : null}

            <label className="contentForm">E-mail</label>
            <input
              className="formData"
              id="email"
              type="email"
              placeholder="ivanov@mail.ru"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}

            <label className="contentForm">Ваши вопросы или комментарии:</label>
            <input
              className="formData"
              id="text"
              placeholder="Напишите сообщение здесь..."
              {...formik.getFieldProps("text")}
            />
            <p className="titleCart">
              После отправки данных – с Вами свяжется наш помощник и объяснит
              дальнейшие действия
              <Button width="lg" type="submit">
                <p>Отправить</p>
              </Button>
            </p>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default CartForm;
