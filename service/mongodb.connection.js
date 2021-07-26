

const connection = {}

var mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/users_database';

connection.connect = () => {
     mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });
}

connection.disconnect = () => { mongoose.disconnect(); }

module.exports = connection;