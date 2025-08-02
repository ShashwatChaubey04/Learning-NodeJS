/*

A Thread Pool is like a group of workers waiting to do tasks. In Node.js, the Thread Pool is provided by libuv (the engine that runs Node.js behind the scenes). 
Instead of creating a new worker (thread) every time, we reuse a limited number of existing workers (It usually has 4 threads by default).

These threads handle tasks that are not JavaScript, like:
  -> File system tasks (fs.readFile, fs.writeFile, etc.)
  -> DNS lookups (dns.lookup)
  -> Compression (zlib)
  -> Crypto operations (crypto.pbkdf2, crypto.scrypt)

“Node.js is single-threaded when Synchronous Tasks are performed, but works like multi-threaded for Asynchronous Tasks.”

"Synchronous" means "Blocking":
The main thread cannot do anything else until the current synchronous task is done.
But it's still single-threaded because:
Only one thread (the main thread) is responsible for executing the JavaScript code — whether it is blocking or not.

*/