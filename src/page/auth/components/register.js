import renderTemplateHbs from "../../../libs/renderTemplateHbs.js";

import "./_form.scss";
import source from "bundle-text:./template.hbs";

const ctx = {
  context: {
    title: "Регистрация",
    firstButton: "Зарегистрироваться",
    secondButton: "Уже есть аккаунт? Войти",
    secondButtonHref: "#/login",
  },
  fields: [
    {
      label: "Почта",
      type: "email",
      name: "email",
      id: "email",
      placeholder: "Ваша почта",
    },
    {
      label: "Логин",
      type: "text",
      name: "login",
      id: "login",
      placeholder: "Ваш логин",
    },
    {
      label: "Имя",
      type: "text",
      name: "first_name",
      id: "first_name",
      placeholder: "Ваше имя",
    },
    {
      label: "Фамилия",
      type: "text",
      name: "second_name",
      id: "second_name",
      placeholder: "Ваша фамилия",
    },
    {
      label: "Телефон",
      type: "tel",
      name: "phone",
      id: "phone",
      placeholder: "Ваш номер телефона",
    },
    {
      label: "Пароль",
      type: "password",
      name: "password",
      id: "password",
      placeholder: "Ваш пароль",
    },
    {
      label: "Пароль (еще раз)",
      type: "password",
      name: "password-repeat",
      id: "password-repeat",
      placeholder: "Ваш пароль еще раз",
    },
  ],
};

export default renderTemplateHbs(source, ctx);
