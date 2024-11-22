// No ES6
var validator = require("validator");

console.log(validator.isEmail("tet@test.com"));
console.log(validator.isEmail("abcDE123"));

// ES6 requires to add "type": "module" in package.json
// import isEmail from 'validator/lib/isEmail.js';

// console.log(isEmail("tet@test.com"));
// console.log(isEmail("abcDE123"));