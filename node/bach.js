// Reference: https://www.educative.io/answers/how-to-open-a-url-in-the-browser-automatically-with-node
const { platform } = require("os");
const { exec } = require("child_process");

const launchBrowser = url => {
  const WINDOWS_PLATFORM = "win32";
  const MAC_PLATFORM = "darwin";

  const osPlatform = platform();

  if (url === undefined) {
  }

  var command;

  if (osPlatform === WINDOWS_PLATFORM) {
    command = `start microsoft-edge:${url}`;
  } else if (osPlatform === MAC_PLATFORM) {
    command = `open -a "Google Chrome" ${url}`;
  } else {
    command = `google-chrome --no-sandbox ${url}`;
  }

  console.log(`executing command: ${command}`);

  exec(command);
};


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

launchBrowser(`http://localhost:${port}/`);