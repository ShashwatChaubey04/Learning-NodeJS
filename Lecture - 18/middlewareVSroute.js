/*

# Middleware

-> Purpose:
  -> To process the request on the way to a response.
  -> Can do logging, authentication, validation, data parsing, etc.
  -> Usually does not send the final response (but it can).

(req, res, next) => { ... }
Calls next() to pass control to the next middleware or route.
If it sends a response (res.send()) and doesn’t call next(), the request ends there.

-> Example:
app.use((req, res, next) => {
  console.log("Middleware: logging request");
  next(); // pass to next handler
});

# Route

-> Purpose:
  -> To handle a specific HTTP method + path and send the final response.
  -> This is where your app logic usually lives.

app.get("/path", (req, res) => { ... });
app.post("/path", (req, res) => { ... });
Typically does not call next() unless there’s another matching route to try.
Almost always ends the request by sending a response.

-> Example:
app.get("/user", (req, res) => {
  res.send("User data"); // Final response
});

**IMPORTANT**  Middleware => Route Handler

*/

const express = require("express");
const app = express();

app.use("/admin", (req, res, next) => {
  const token = "xyz";
  const isAdminAuthorized = token ==="xyz";
  if(isAdminAuthorized) next();
  else res.status(401).send("Unauthorized Request");
});

app.use("/admin/getAllData", (req, res) => {
  res.send("All Data Sent");
});

app.use("/admin/deleteUser", (req, res) => {
  res.send("Deleted a User");
});

app.listen(3000, () => {
  console.log("Server is Successfully Listening on port 3000");
});
