const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const routes = require('./routes/index')
const session = require('express-session')

const app = express()
const PORT = 3000

require('./config/mongoose')

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(session({
  secret: 'checkUsersSecret',
  resave: false,
  saveUninitialized: false
}))

app.use(routes)

app.listen(PORT, () => {
  console.log(`Running check-users on localhost:${PORT}`)
})
