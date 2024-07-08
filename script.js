// script.js

import { userVsComputer } from "./modules/userVsComputer.js";
import { computerVsComputer } from "./modules/computerVsComputer.js";

document.addEventListener("DOMContentLoaded", () => {
  userVsComputer();
  computerVsComputer();
});
