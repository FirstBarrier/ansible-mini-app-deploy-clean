const express = require('express');
const app = express();
const port = 8080;

const VERSION = process.env.APP_VERSION || "1.0.0";
const startTime = Date.now();

app.get('/', (req, res) => {
  res.send('<h1>Success! Dockerized Mini Web Server is Running!</h1>');
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: "UP",
    uptime: Math.floor((Date.now() - startTime) / 1000)
  });
});

app.get('/version', (req, res) => {
  res.json({
    version: VERSION
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});