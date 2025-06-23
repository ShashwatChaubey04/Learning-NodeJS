require("./module.js");     // Including a Module inside another Module.
// require("./module.js"); === require("./module");

require("./sum.js");     // This Module will run but we can't access variables, functions etc of that Modules.


var a = 10;
var b = 20;

// const obj = require("./sum.js");
// obj.calculateSum(a,b); 

const {calculation, calculateSum} = require("./sum.js");     // Object Destructuring
calculateSum(a,b);

// var calculation = "Hey";     Syntax Error : 'calculation' has already been declared
console.log(calculation);


// Run in a Non-Strict Mode
str = "Hey! Good Morning Dear";   
console.log(str);
