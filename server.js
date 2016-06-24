const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3333;
const favicon = require('serve-favicon');

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
  res.redirect('/buttons.html');
});

app.get('/components', (req, res) => {
  res.redirect('cards.html');
});

app.get('/templates', (req, res) => {
  res.redirect('add-menu.html');
});

// Redirect to old routes
app.get('/guidelines', (req, res) => {
  res.redirect('/principles');
});

app.get('/guidelines/:name', (req, res) => {
  res.redirect(`/principles/${req.params.name}`);
});

app.get('/base-elements', (req, res) => {
  res.redirect('/elements');
});

app.get('/base-elements/:name', (req, res) => {
  res.redirect(`/elements/${req.params.name}`);
});

app.get('/global', (req, res) => {
  res.redirect('/essentials');
})

app.get('/global/:name', (req, res) => {
  res.redirect(`/essentials/${req.params.name}`);
});

app.listen(port, () => {
  console.log(`\n> Bluemix Design System is running: http://localhost:3333/\n`);
});

app.get('/download/:iconFolder/:icon', (req, res) => {
  res.download(__dirname + `/dist/assets/icons/${req.params.iconFolder}/${req.params.icon}.svg`)
});

app.use(favicon(path.resolve(__dirname + `/dist/assets/images/favicon.ico`)));
