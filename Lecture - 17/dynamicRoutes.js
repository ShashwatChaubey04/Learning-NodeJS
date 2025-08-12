const express = require("express");
const app = express(); 

app.get("/user", (req, res) => {
  console.log(req.query);
});

app.get("/user/:userId/:name:/password", (req, res) => {
  console.log(req.params);   // {userId: '707', name: 'Shashwat Chaubey', password: 'shashwat@123'}
});


app.listen(3000, () => {
  console.log("Server is Successfully Listening on port 3000");
});
