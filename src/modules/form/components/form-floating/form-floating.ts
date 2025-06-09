import Block, { TBlockProps } from "@/services/block";

import { type TField } from "@/utils/types";
import { deepCompare } from "@/utils/helpers";

import FormControl from "../form-control";

import template from "./form-floating.hbs";

import "./form-floating.scss";

type TFormFloating = {
  control: FormControl;
} & TField &
  TBlockProps;

export default class FormFloating extends Block<TFormFloating> {
  constructor(props: TField) {
    super({
      ...props,
      control: new FormControl(props),
    });
  }

  render() {
    return this.compile(template);
  }

  componentDidUpdate(oldProps: TFormFloating, newProps: TFormFloating) {
    return !deepCompare(oldProps.errors, newProps.errors);
  }
}
