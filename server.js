'use strict';

const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.set('views', path.resolve(__dirname, 'dist'));
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`\n> Bluemix Design System is running: http://localhost:8080/\n`);
});
