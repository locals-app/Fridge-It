const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// File imports
const routes = require('./routes');
const db = require('../db');

// Express Initialization
const port = process.env.PORT || 3000;
const app = express();

// Middlewares
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

// Routes
app.use(express.static(path.resolve(__dirname, '../client/public')));
app.use('/api', routes);

app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/public/index.html'));
})

// Server Initialization
db.fridge.sync()
  .then(() => {
    db.messageInfo.sync();
    db.fridgeItems.sync()
      .then(() => {
        app.listen(port, () => {
          console.log('Listening on Port: ', port);
        });
      })
      .catch(err => {
        console.log('Error syncing FridgeItems table: ', err);
      });
  })
  .catch(err => {
    console.log('Error syncing Users table: ', err);
  });