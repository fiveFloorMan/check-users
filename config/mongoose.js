const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/check-users')

const db = mongoose.connection

db.on('error', () => {
  console.log('mongoose connect is error')
})

db.once('open', () => {
  console.log('mongoose connect')
})