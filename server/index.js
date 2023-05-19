const express = require("express");
const app = express();
const path = require("path");
const port = 3001;
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/public")));
// server/index.js
// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/public", "index.html"));
});
app.get("/api", function (req, res) {
  res.json({ msg: "Hello from server!" });
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
