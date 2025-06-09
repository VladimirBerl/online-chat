import { TField } from "@/utils/types";
import template from "./form-control.hbs";

import "./form-control.scss";
import Block, { TBlockProps } from "@/services/block";

type TFormControl = TField & TBlockProps;

export default class FormControl extends Block<TFormControl> {
  constructor(props: TField) {
    super(props);
  }

  render() {
    return this.compile(template);
  }
}
