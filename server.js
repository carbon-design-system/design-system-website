'use strict';

const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3333;

// Clean exit of server.js process
// See: http://www.benjiegillam.com/2011/08/node-js-clean-restart-and-faster-development-with-nodemon/
// process.once('SIGUSR2', function() {
//   console.log(`\n---> Shutting down server.js process...\n`);
//   return process.kill(process.pid, 'SIGUSR2');
// });

app.set('views', path.resolve(__dirname, 'dist'));
app.use(express.static('dist'));

// Home Page
app.get('/', (req, res) => {
  res.render('index');
});

// Redirect to default HTML pages
// when User navigates to a route without specifying HTML file
app.get('/getting-started', (req, res) => {
  res.redirect('front-end-best-practices.html');
});

app.get('/principles', (req, res) => {
  res.redirect('user-experience.html');
});

app.get('/essentials', (req, res) => {
  res.redirect('colors.html');
});

app.get('/elements', (req, res) => {
  res.redirect('buttons.html');
});

app.get('/components', (req, res) => {
  res.redirect('cards.html');
});

app.get('/templates', (req, res) => {
  res.redirect('add-menu.html');
});

app.listen(port, () => {
  console.log(`\n> Bluemix Design System is running: http://localhost:3333/\n`);
});
