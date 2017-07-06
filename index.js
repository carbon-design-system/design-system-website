const express = require('express');
const compression = require('compression');
const path = require('path');
const app = express();

const port = process.env.PORT || 8080;

app.use(compression());
app.use(express.static('./build'));

app.get('/*', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=UTF-8');
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server is live at http://localhost:${port}`);
});
