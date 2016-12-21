const path = require('path');
const express = require('express');
const webpack = require('webpack');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/public', express.static(__dirname + '/client/public'))


app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/index.html'));
});

app.listen(8888)
