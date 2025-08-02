const fs = require("fs");

setImmediate(() => console.log("setImmediate expired - 01"));

setTimeout(() => console.log("setTimeout expired - 01"));

Promise.resolve(() => console.log("Promise expired - 01"));

fs.readFile("./Lecture - 09/file.txt", "utf-8", () => {
  console.log("File Reading Successfull");
});

process.nextTick(() => {
  process.nextTick(() => console.log("process.nextTick expired - 02"));
  console.log("process.nextTick expired - 01");
});

console.log("Last Line of the File");