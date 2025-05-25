import renderTemplateHbs from "../../../libs/renderTemplateHbs.js";
import "./_layout.scss";
import "./_profile.scss";
import source from "bundle-text:./template.hbs";

import { userData } from "../../../const/data";

export default renderTemplateHbs(source, userData);
