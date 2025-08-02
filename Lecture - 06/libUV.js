/*

=> A **processor** (CPU) is a hardware unit that processes tasks. 
   Inside this processor, a **Thread** is like a worker that does one job at a time.
   JavaScript runs on a **single thread** – meaning it handles one task at a time.

=> The **V8 Engine** (made by Google in C++) runs inside that thread.
   It is the engine that reads, interprets, compiles, and executes JavaScript code.


=> JavaScript by design is **synchronous and single-threaded**:
   - It executes line by line.
   - Blocking tasks (like long-running operations) can freeze the program.

=> But **Node.js makes JavaScript asynchronous and non-blocking**.
   Node.js adds superpowers like:
   - **Event Loop**: Watches over different tasks and decides when to run callbacks.
   - **Callback Queue**: Stores async task results that are ready to be executed.
   - **Libuv**: A low-level C library that provides async I/O, timers, etc.
   - **Thread Pool**: For background tasks like file reading, hashing, etc.

=> When a JavaScript program starts running, the first thing created is the:
   ✅ **Global Execution Context (GEC)**:
      - It’s the environment where all the top-level code runs (outside functions).
      - It gets pushed into the **Call Stack**.

=> Example:
```js
function multiply(a, b) {
  return a * b;
}
let result = multiply(2, 3);
console.log(result);
*/
