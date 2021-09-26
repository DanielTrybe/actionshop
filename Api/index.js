const connection = require('./models/connection.js');
const express = require('express');
const app = express();
const port = 3000;
// const cors = require('cors');
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const routeActions = require('./route/routeActions')
const routeCategories = require('./route/routeCategories');

app.use('/actions', routeActions);
app.use('/categories', routeCategories);

app.listen(port, () => console.log("Escutando na porta 3k"));
