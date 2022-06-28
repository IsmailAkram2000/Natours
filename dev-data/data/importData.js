const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('./../../Model/appModel');
const fs = require('fs');

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

const data = JSON.parse(
  fs.readFileSync('./dev-data/data/tours-simple.json', 'utf-8')
);

const importData = async () => {
  try {
    const newTuor = await Tour.create(data);
  } catch (err) {
    console.log(`Error : ${err}`);
  }
  process.exit();
};

const deleteAll = async () => {
  try {
    const deleted = await Tour.deleteMany();
  } catch (err) {
    console.log(`Error : ${err}`);
  }
  process.exit();
};

if (process.argv[2] == 'import') importData();
if (process.argv[2] == 'delete') deleteAll();
