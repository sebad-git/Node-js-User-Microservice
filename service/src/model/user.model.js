
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
      type: String,
      required: true,
      unique:true
    },
    password: {
      type: String,
      required: true
    },
    names: {
      type: String
    },
    lastnames: {
      type: String
    },
    creation_date: { 
      type: Date,
      default: Date.now
    }
  });

module.exports = userSchema;