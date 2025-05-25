import { compile } from "handlebars";

export default function renderTemplateHbs(course, context) {
  return function () {
    const html = compile(course)(context);
    const div = document.createElement("div");
    div.innerHTML = html;
    return div;
  };
}
