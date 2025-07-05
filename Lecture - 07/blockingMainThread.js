const { error } = require("node:console");
const crypto = require("node:crypto");  // core Node JS module

console.log("Hello World");

var a = 1078698;
var b = 20986;

// pbkdf2 -> (Password-Based Key Derivation Function
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("Key is generated in Sync Way.");

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, Key) => {
  console.log("Key is generated in Async Way.");
});

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}

var c = multiplyFn(a,b);
console.log(c);