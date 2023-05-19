const express = require("express");
const app = express();
const port = 3001;

app.get("/api", function (req, res) {
  res.json({ msg: "Hello from server!" });
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
