// Without "type": "module" in package.json
const math = require("./myFunctionWithoutModule.js");

console.log(math(1, 2, 3, 4));
