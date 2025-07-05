// require function work in Synchronous Mode
const fs = require("fs");
const https = require("https");

// Synchronous Way of Reading a File
fs.readFileSync("./Lecture - 07/file.txt", "utf-8");
console.log("This will execute only after File Read...");

console.log("Hello World");

var a = 1078698;
var b = 20986;

// Takes Milli-Second to fectch the data from API. (200, 300 or 400 ms)
https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched Data Successfully");
});

setTimeout(() => {
  console.log("setTimeout called after 5 seconds");
}, 5000);

fs.readFile("./Lecture - 07/file.txt", "utf-8", (err, data) => {
  console.log("File Data : ", data);
});

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}

var c = multiplyFn(a,b);
console.log(c);