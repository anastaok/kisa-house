import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
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
      <div className="containerForm">
        <Form className="formCart">
          <strong>Оставьте Ваши контакты:</strong>
          <label className="contentForm">ФИО</label>
          <Field
            className="formData"
            name="fullName"
            type="text"
            placeholder="Иванов Иван Иванович"
          />
          <ErrorMessage name="fullName" />

          <label className="contentForm">Телефон</label>
          <Field
            className="formData"
            name="telephone"
            type="tel"
            placeholder="89000000000"
          />
          <ErrorMessage name="telephone" />

          <label className="contentForm">E-mail</label>
          <Field
            className="formData"
            name="email"
            type="email"
            placeholder="ivanov@mail.ru"
          />
          <ErrorMessage name="email" />

          <label className="contentForm">Ваши вопросы или комментарии:</label>
          <Field
            as="textarea"
            name="text"
            className="formData"
            placeholder="Напишите сообщение здесь..."
          />
          <p className="titleCart">
            После отправки данных – с Вами свяжется наш помощник и объяснит
            дальнейшие действия
            <Button width="lg" type="submit">
              <p>Отправить</p>
            </Button>
          </p>
        </Form>
      </div>
    </Formik>
  );
};

export default CartForm;
