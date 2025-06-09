import Block, { TBlockProps } from "@/services/block";

import template from "./form.hbs";

import "./form.scss";

import Validator from "@/services/validator";
import { TField } from "@/utils/types";
import Button, { TButton } from "@/components/button";
import FormFloating from "./components/form-floating";

type TForm = {
  button: Block;
  fieldList: Block[];
} & TBlockProps;

type TFormProps = {
  fields: TField[];
  button: TButton;
} & TBlockProps;

export default class Form extends Block<TForm> {
  validator: Validator | null;

  constructor({ fields, button, ...props }: TFormProps) {
    super({
      ...props,
      button: new Button(button),
      fieldList: fields.map((item: TField) => new FormFloating(item)),
    });
  }

  render() {
    return this.compile(template);
  }

  addEvents() {
    super.addEvents();
    this.validator = new Validator(this);
  }

  removeEvents() {
    super.removeEvents();
    this.validator?.removeEvents();
    this.validator = null;
  }
}
