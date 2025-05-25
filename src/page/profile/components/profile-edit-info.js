import renderTemplateHbs from "../../../libs/renderTemplateHbs.js";

import "./_profile-edit-info.scss";
import source from "bundle-text:./template-edit-info.hbs";

import { userData } from "../../../const/data";

const ctx = {
  fields: [
    {
      label: "Почта",
      type: "email",
      name: "email",
      id: "email",
      value: userData.email,
    },
    {
      label: "Логин",
      type: "text",
      name: "login",
      id: "login",
      value: userData.login,
    },
    {
      label: "Имя",
      type: "text",
      name: "first_name",
      id: "first_name",
      value: userData.first_name,
    },
    {
      label: "Фамилия",
      type: "text",
      name: "second_name",
      id: "second_name",
      value: userData.second_name,
    },
    {
      label: "Имя в чате",
      type: "text",
      name: "display_name",
      id: "display_name",
      value: userData.display_name,
    },
    {
      label: "Телефон",
      type: "tel",
      name: "phone",
      id: "phone",
      value: userData.phone,
    },
  ],
};

export default renderTemplateHbs(source, ctx);
