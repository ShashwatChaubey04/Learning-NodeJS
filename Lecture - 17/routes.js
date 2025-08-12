const express = require("express");
const app = express(); 

/* 
app.use(path, handler)
  - This matches all HTTP methods (GET, POST, PUT, DELETE, etc.)
  - The path can be exact or partial.
  - IMPORTANT: If `app.use()` sends a response and doesn't call `next()`, 
    then the request stops there — later routes won't run.
*/
app.use("/user", (req, res) => {
  res.send("Namaste from the Dashboard"); // Ends request → app.get("/user") will never run
  next();
});   // Order's Matter

/*
app.get(path, handler)
  - This matches only HTTP GET requests for the exact path given (or with params).
  - Example: GET /user will match here.
  - Won't run if a previous middleware already sent a response for that path.
*/
app.get("/user", (req, res)=> {
  res.send({firstName: "Shashwat", lastName: "Chaubey"});
});
app.post("/user", (req, res) => {
  console.log("Save Data to the Database");
  res.send("Data successfully saved to the Database")
});

app.listen(3000, () => {
  console.log("Server is Successfully Listening on port 3000");
});
