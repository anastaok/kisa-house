import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import Button from "../Button";
import { TKisa } from "../../App";

import "./CartForm.scss";

type TProps = {
  setCartKisas: React.Dispatch<React.SetStateAction<TKisa[]>>;
};

const CartForm: React.FC<TProps> = ({ setCartKisas }) => {
  const validate = Yup.object({
    fullName: Yup.string()
      .min(3, "*не менее 3 символов")
      .required("*обязательно к заполнению"),
    telephone: Yup.string()
      .min(11, "*укажите полный мобильный номер телефона с 8")
      .max(11, "*написано больше 11 символов")
      .required("*обязательно к заполнению (11 символов)"),
    email: Yup.string()
      .email("*неверно указан e-mail")
      .required("*обязательно к заполнению"),
  });

  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        fullName: "",
        telephone: "",
        email: "",
        text: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log("SUBMIT", values);
        navigate("/kisa-take");
        setCartKisas([]);
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
          <ErrorMessage
            name="fullName"
            component="div"
            className="errorMassage"
          />

          <label className="contentForm">Телефон</label>
          <Field
            className="formData"
            name="telephone"
            type="number"
            placeholder="89000000000"
          />
          <ErrorMessage
            name="telephone"
            component="div"
            className="errorMassage"
          />

          <label className="contentForm">E-mail</label>
          <Field
            className="formData"
            name="email"
            type="email"
            placeholder="ivanov@mail.ru"
          />
          <ErrorMessage name="email" component="div" className="errorMassage" />

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
