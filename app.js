const express = require('express');
const { sup, how } = require('./middlewares');
const app = express();

app.get('/users', sup, (req, res) => {
  res.send('Home page');
});

app.listen(3000, () => {
  console.log('server started');
});
