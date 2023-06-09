const express = require("express");
const app = express();
const path = require("path");
const port = 3001;
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));
// server/index.js
app.get("/api", function (req, res) {
  res.json({ msg: "Hello from server!" });
});
// All other GET requests not handled before will return our React app
app.get("/home", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
