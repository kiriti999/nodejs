const express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', process.env.PORT || config.port);
mongoose.connect(config.database, { autoIndex: false }, () => {
  console.log('connected to mongodb');
});

// Task 1
const bookRoutes = require('./routes/book-store');
app.set('port', (config.port));
app.use('/', express.static(__dirname));
app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});
app.use('/api', bookRoutes);
app.use(express.static(path.join(__dirname, '../dist')));
const router = require('express').Router();
// Task 1

//to load  home  page



module.exports = app;
