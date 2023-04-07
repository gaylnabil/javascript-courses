/*********************************
 * JavaScript modules allow you to break up the code
 * into separate files.
 *
 * This makes it easier to maintain a code-base.
 *
 * Modules are imported from external files with
 * the import statement.
 *
 * Modules also rely on type="module" in the <script> tag.
 * Using 'Export and Import Directives'
 *
 * NB: In file 'index.html' should add script tag
 *     with type 'module'
 * Ex.: <script type="module" src="js/modules.js"></script>
 * */

import { PI, getCircumference, getArea } from "./math_utils.js";

console.log("PI:", PI);

const circumference = getCircumference(10);

console.log("Circumference :", circumference);

const area = getArea(10);

console.log("Area :", area);
