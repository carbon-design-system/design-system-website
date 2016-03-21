'use strict';

const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// Clean exit of server.js process
// See: http://www.benjiegillam.com/2011/08/node-js-clean-restart-and-faster-development-with-nodemon/
process.once('SIGUSR2', function() {
  console.log(`\n---> Shutting down server.js process...\n`);
  return process.kill(process.pid, 'SIGUSR2');
});

app.set('views', path.resolve(__dirname, 'dist'));
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/base-elements', (req, res) => {
  // res.sendFile(path.join(__dirname + '/dist/base-elements.html'));
  res.redirect('buttons.html');
});

app.get('/components', (req, res) => {
  // res.sendFile(path.join(__dirname + '/dist/components.html'));
  res.redirect('cards.html');
});

app.get('/guidelines', (req, res) => {
  res.redirect('front-end-best-practices.html');
});

app.get('/templates', (req, res) => {
  res.redirect('add-menu.html');
});

app.listen(port, () => {
  console.log(`\n> Bluemix Design System is running: http://localhost:8080/\n`);
});
