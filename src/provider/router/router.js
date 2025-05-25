import { renderLogin, renderRegister } from "../../page/auth";
import { renderHome } from "../../page/home";
import { renderNotFound } from "../../page/not-found";
import {
  renderProfile,
  renderProfileEditInfo,
  renderProfileEditPassword,
} from "../../page/profile";

const routes = {
  "/profile/edit/password": renderProfileEditPassword,
  "/profile/edit": renderProfileEditInfo,
  "/profile": renderProfile,
  "/register": renderRegister,
  "/login": renderLogin,
  "/": renderHome,
};

export function initRouter() {
  window.addEventListener("hashchange", renderRoute);
  renderRoute();
}

function renderRoute() {
  const root = document.querySelector("#root");
  root.innerHTML = "";

  const path = window.location.hash.replace("#", "") || "/";

  const page = routes[path];

  if (page) {
    const content = page();
    root.appendChild(content);
  } else {
    root.appendChild(renderNotFound());
  }
}
