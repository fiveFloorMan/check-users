const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  email: {
    type: email,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('User', userSchema)