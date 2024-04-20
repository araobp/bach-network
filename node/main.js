const utils = require("browser-utils");
const express = require("express");
const app = express();
const PORT = 3000;

const db = require("db");

app.get("/", (req, res) => { res.send("Hello World!");
});

app.get("/names", (req, res) => {
  db.names(res);
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

console.log(utils);
utils.launchBrowser(`http://localhost:${PORT}/`);
