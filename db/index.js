  
const mongoose = require('mongoose');

require('dotenv').config();
const { DB_HOST } = process.env;

const dataBase = mongoose
.connect(DB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})
.then(async () => console.log('Database connect'))
.catch(error => console.log(error));

module.exports = dataBase;