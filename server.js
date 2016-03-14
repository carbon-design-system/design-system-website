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

app.get('/base-elements', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/base-elements.html'));
});

app.get('/components', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/components.html'));
});

app.get('/guidelines', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/guidelines.html'));
});

app.get('/templates', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/templates.html'));
});

app.listen(port, () => {
  console.log(`\n> Bluemix Design System is running: http://localhost:8080/\n`);
});
