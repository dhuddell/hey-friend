require('dotenv').config();
require('@google-cloud/debug-agent').start();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const staticPath = 'dist';

app.use('/', express.static(path.join(__dirname, staticPath)));

app.use('/', (_req, res) => {
  res.sendFile(path.join(__dirname, staticPath, 'index.html'));
});
app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log(`Listening on port: ${port}`);
});
