const express = require("express");
const app = express();

app.use("/user", (req, res) => {
  // res.send("Route Handler");     If we will not send any response (res.send(), res.json(), res.end() etc.), then the request will hang — the browser or client will keep waiting until the HTTP request times out.
});

app.listen(3000, () => {
  console.log("Server is Successfully Listening on port 3000");
});
