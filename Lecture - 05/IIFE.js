/* 
Module works in the same way as the given Function.
When we write require("./Calculations"); => All the code in Calculations is wrapped in a function (IIFE) and Node JS give it to V8 for execution.
This Function is known as IIFE - Immediately Invoked Function Expression (Immediately Calling a Function)
The Function has a Parameter module, require etc. that it pass inside the Function.
*/

(function (module, require) {

  // All the code of Modules are written here.

  require("./anyPath");

  function addition(a, b) {
    console.log(a+b);
  }
  
  module.exports = {addition};

}) ();


// function () {} => Function,   (function () {}) => Expression