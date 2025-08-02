const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate expired"));

fs.readFile("./Lecture - 09/file.txt", "utf-8", () => {
  console.log("File Reading Successfull");
});

setTimeout(() => console.log("setTimeout expired"), 0);

process.nextTick(() => console.log("process.nextTick expired"), 0);

function printA() {
  console.log('a =', a);
}

printA();
console.log("Last line of the File.");