//Modules protect's their Variables and Functions from Leaking.

console.log("Sum Module Executed");

var calculation = "Summation";

function calculateSum(a, b) {
  console.log(a+b);
}

// If you want to give access of any Function or Variable to other Module you have to explicitly export it.
// module.exports = {
//   calculation: calculation,
//   calculateSum: calculateSum,
// };

module.exports = {calculation, calculateSum};