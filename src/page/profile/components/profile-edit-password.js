import renderTemplateHbs from "../../../libs/renderTemplateHbs.js";

import "./_profile-edit-info.scss";
import source from "bundle-text:./template-edit-password.hbs";

import { userData } from "../../../const/data";

const ctx = {
  fields: [
    {
      label: "Старый пароль",
      type: "password",
      name: "password",
      id: "oldPassword",
      value: userData.password,
      disabled: true,
    },
    {
      label: "Новый пароль",
      type: "password",
      name: "new-password",
      id: "newPassword",
      value: userData.password,
    },
    {
      label: "Повторите новый пароль",
      type: "password",
      name: "repeat-new-password",
      id: "repeatNewPassword",
      value: userData.password,
    },
  ],
};

export default renderTemplateHbs(source, ctx);
