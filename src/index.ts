import "./styles/_index.scss";
import "./libs/handlebars";

import { initRouter } from "./provider/router/router";

document.addEventListener("DOMContentLoaded", () => {
  initRouter();
});
