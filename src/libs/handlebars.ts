import Handlebars from "handlebars";
import buttonTemplate from "bundle-text:../components/button/button.hbs";
import inputTemplate from "bundle-text:../components/input/input.hbs";
import LayoutProfile from "bundle-text:../page/profile/components/layout.hbs";

Handlebars.registerPartial("Button", buttonTemplate);
Handlebars.registerPartial("Input", inputTemplate);
Handlebars.registerPartial("LayoutProfile", LayoutProfile);
