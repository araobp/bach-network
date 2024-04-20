const { launchBrowser } = require("./util.js");
const express = require("express");
const app = express();
const PORT = 3000;

const { names } = require("./db.js");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/names", (req, res) => {
  names(res);
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

launchBrowser(`http://localhost:${PORT}/`);
