const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const api = require('./api');
require('./configs/passport-config');
const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(express.static('public'));
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/contacts', api.contacts);
app.use('/auth', api.auth);
app.use('/users', api.users);

app.use((_req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, _req, res, _next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
