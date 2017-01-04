const path = require('path');
const express = require('express');
const webpack = require('webpack');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use('/public', express.static(path.join(__dirname, '/client/public')));
app.use('/scripts', express.static(path.join(__dirname, '/node_modules')));
app.use('/assets', express.static(path.join(__dirname, '/client/assets')));
app.get('/styles/style.css', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/styles/style.css'));
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/index.html'));
});

app.listen(8888)
