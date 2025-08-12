const express = require("express");
const app = express();

/*
app.use("/user", (req, res, next) => {
  console.log("Handling the user Route - 1");
  next();
});
app.use("/user", (req, res, next) => {
  console.log("Handling the user Route - 1");
  res.send("Response - 2")'
});
*/

app.use(
  "/user", [
    (req, res, next) => {
      console.log("Handling the user Route - 1");
      next(); 
      res.send("Response - 1"); 
    },  
    (req, res, next) => {
      console.log("Handling the user Route - 2");
      res.send("Response - 2");
      // next();     Express think some other Route Handler must be present which will send the Response so it give Cannot GET /user.
    },
  ]
);

app.listen(3000, () => {
  console.log("Server is Successfully Listening on port 3000");
});
