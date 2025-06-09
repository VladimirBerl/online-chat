import Block, { TBlockProps } from "@/services/block";
import template from "./button.hbs";

import "./button.scss";

export type TButton = {
  type?: string;
  mod?: string;
  size?: string;
  text: string;
} & TBlockProps;

export default class Button extends Block<TButton> {
  constructor(props: TButton) {
    super({
      type: "button",
      ...props,
    });
  }

  render() {
    return this.compile(template);
  }
}
