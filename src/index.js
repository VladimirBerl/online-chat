import "./styles/_index.scss";
import { initRouter } from "./provider/router/router";
import "./libs/handlebars";

document.addEventListener("DOMContentLoaded", () => {
  initRouter();
});
