const User = require('../user')
const db = require('../../config/mongoose')
const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]

db.once('open', () => {
  console.log('userSeeder.js start running')
  for (let i = 0; i < 5; i++) {
    const user = users[i]
    User.create({
      firstName: user.firstName,
      email: user.email,
      password: user.password
    })
  }
  console.log('userSeeder.js done')
})
