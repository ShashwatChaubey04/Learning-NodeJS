// Fast, unopinionated, minimalist web framework for Node.js

const express = require("express");
const app = express(); // This creates an Express application and stores it in the Variable app.

app.use("/", (req, res) => {
  res.send("Namaste from the Dashboard");
});
app.use("/hello", (req, res) => {
  res.send("Hello Hello Hello");
});
app.use("/server", (req, res) => {
  res.send("Hello from the Server");
});

app.listen(3000, () => {
  console.log("Server is Successfully Listening on port 3000");
});

/*
app.use(...)
This is a Middleware Function that will be triggered for every request (any route, any method like GET/POST).

(req, res) => { ... }
This is the Callback / RequestHandler Function (middleware) that runs when a request hits the server.

It receives two objects:
req: the request object
res: the response object

res.end("Hello from the Server");
This ends the response and sends "Hello from the Server" to the client.
It’s a low-level method. It just closes the response and sends plain text.
*/