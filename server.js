const path = require('path');
const express = require('express');
const webpack = require('webpack');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./server/router');

const app = express();

// bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// pathjoin for index.html
app.use('/public', express.static(path.join(__dirname, '/client/public')));
app.use('/scripts', express.static(path.join(__dirname, '/node_modules')));
app.use('/assets', express.static(path.join(__dirname, '/client/assets')));
app.get('/styles/style.css', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/styles/style.css'));
});

// api calls

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/index.html'));
});
app.use('/api', router);


app.listen(8888)
