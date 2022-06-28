const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');

const app = express();

dotenv.config({ path: './config.env' });

const db = process.env.DATABASE.replace('<PASSWORD>', process.env.PASSWORD);

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((con) => console.log('Database connection successful.'));

app.listen(5000, () => {
  console.log('App running on port 5000.');
});

module.exports = app;
