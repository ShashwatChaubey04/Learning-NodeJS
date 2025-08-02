const fs = require("fs");

setImmediate(() => console.log("setImmediate expired - 01"));

setTimeout(() => console.log("setIimeout expired - 01"));

Promise.resolve(() => console.log("Promise.resolve expired - 01"));

fs.readFile("./Lecture - 09/file.txt", "utf8", () => {
  setTimeout(() => console.log("setTimeout expired - 02"));
  process.nextTick(() => console.log("process.nextTick expired - 02"));
  setImmediate(() => console.log("setImmediate expired - 02"));
  console.log("File Reading Successfull");
});

process.nextTick(() => console.log("process.nextTick expired - 01"));

console.log("Last Line of the File");
