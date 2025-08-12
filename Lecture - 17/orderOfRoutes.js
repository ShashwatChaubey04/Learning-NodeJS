const express = require("express");
const app = express(); 

// This code overwrite everything as /, /hello and /server shows "Namaste from the Dashboard"
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

The reason /hello and /server are also showing "Namaste from the Dashboard" is because of how app.use() works in Express.

-> app.use("/", ...) matches every route that starts with /.
-> That includes /, /hello, /server, /anything-you-can-think-of.
-> Since it comes before your /hello route, it gets executed first, and because it sends a response, the request ends there — later routes are never reached.

#NOTE : Order of writing the Code (Route) matter a lot.
*/