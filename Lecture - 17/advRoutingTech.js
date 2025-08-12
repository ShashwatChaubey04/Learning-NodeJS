const express = require("express");
const app = express();

app.get("/ab?c", (req, res) => {
  res.send({firstName: "Shashwat", lastName: "Chaubey"});
});

/*
1️⃣ app.get("/ab?c", ...)
Pattern: /ab?c
-> The ? means: the character before it is optional (can appear 0 or 1 time).
-> Here, the ? applies only to b.
-> So the route will match:
  -> /ac ✅ (b is missing)
  -> /abc ✅ (b is present)
-> Will NOT match:
  -> /abbc ❌ (extra b’s)
  -> /abdc ❌ (extra letters in the middle)
*/

app.get("/ab+c", (req, res) => {
  res.send({firstName: "Shashwat", lastName: "Chaubey"});
});

/*
2️⃣ app.get("/ab+c", ...)
Pattern: /ab+c
-> The + means: the character before it must appear at least once, and can repeat.
-> Here, the + applies to b.
-> So the route will match:
  -> /abc ✅ (one b)
  -> /abbc ✅ (two b’s)
  -> /abbbbbc ✅ (many b’s)
-> Will NOT match:
  -> /ac ❌ (no b at all)
*/

app.get("/ab*cd", (req, res) => {
  res.send({firstName: "Shashwat", lastName: "Chaubey"});
});

/*
3️⃣ app.get("/ab*cd", ...)
Pattern: /ab*cd
-> The * means: the character before it can appear zero or more times, but here in Express, * actually matches any characters (wildcard) in between.
-> So here:
-> Starts with ab
-> Then anything in the middle (* matches any length of string, including nothing)
-> Ends with cd
-> Will match:
  -> /abcd ✅ (nothing between b and c)
  -> /abxcd ✅ (one letter between)
  -> /ab123cd ✅ (numbers in between)
  -> /abHELLOcd ✅ (word in between)
-> Will NOT match:
  -> /acd ❌ (missing b)
  -> /abdc ❌ (doesn’t end with cd in the right order)
*/

app.get("/a/", (req, res) => {
  res.send({firstName: "Shashwat", lastName: "Chaubey"});
});

/*
4️⃣ app.get("/a/", ...)
-> Use of Regex in Route
-> Pattern: /a/
-> There’s no special regex symbol here — it’s just a normal path.
-> In Express (by default), trailing slashes don’t matter, so /a and /a/ are treated the same.
-> This route will only match exactly /a or /a/ — nothing before or after.
->Will match:
  -> /a ✅ (exact match)
  -> /a/ ✅ (same as /a in Express by default)
-> Will NOT match:
  -> /abc ❌ (extra letters after a)
  -> /a/anything ❌ (extra path segments)
*/

app.get("/.*fly$/", (req, res) => {
  res.send({firstName: "Shashwat", lastName: "Chaubey"});
});

/*
5️⃣  app.get("/.*fly$/", ...)
-> Pattern meaning: /.*fly$/
-> In Express, if you pass a string starting and ending with / like this, it’s treated as a regular expression.
-> Let’s break down the regex:
-> .* → any characters, zero or more (dot = any character, * = repeat zero or more times)
-> fly → literal letters f, l, y
-> $ → end of string anchor (matches only if the path ends here)
-> So this route will match any path that ends with "fly".
-> Will match:
  -> /butterfly ✅
  -> /dragonfly ✅
  -> /superfly ✅
  -> /fly ✅
-> Will NOT match:
  -> /flyer ❌ (doesn’t end with "fly")
  -> /flying ❌ (extra letters after "fly")
  -> /abc/fly/more ❌ (because "fly" isn’t at the very end)
*/

app.listen(3000, () => {
  console.log("Server is Successfully Listening on port 3000")
})