const fs = require("fs");
const crypto = require("crypto");

// process.env.UV_THREADPOOL_SIZE = 2;

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("1 - crypto.pbkdf2 Done");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("2 - crypto.pbkdf2 Done");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("3 - crypto.pbkdf2 Done");
}); 

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("4 - crypto.pbkdf2 Done");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("5 - crypto.pbkdf2 Done");
});

/*

What's Happening Internally:

  -> Node.js starts your script on the main thread.
  -> It sees 5 crypto.pbkdf2 calls — all are asynchronous.
  -> These are offloaded to the libuv Thread Pool.
  -> By default, the thread pool has 4 threads (UV_THREADPOOL_SIZE=4).

  So:
  -> 4 tasks are picked immediately (say, 1 to 4).
  -> The 5th (task 5) waits in a queue until one of the 4 threads becomes free.

*/