import renderTemplateHbs from "../../../libs/renderTemplateHbs";

import "./_form.scss";
import source from "bundle-text:./template.hbs";

const ctx = {
  context: {
    title: "Авторизация",
    firstButton: "Войти",
    secondButton: "Еще нет аккаунта? Регистрация",
    secondButtonHref: "#/register",
  },
  fields: [
    {
      label: "Логин",
      type: "text",
      name: "login",
      id: "login",
      placeholder: "Введите логин",
    },
    {
      label: "Пароль",
      type: "password",
      name: "password",
      id: "password",
      placeholder: "Введите пароль",
    },
  ],
};

export default renderTemplateHbs(source, ctx);
