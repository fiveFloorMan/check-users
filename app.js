const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const PORT = 3000

require('./config/mongoose')

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('login')
})

app.listen(PORT, () => {
  console.log(`Running check-users on localhost:${PORT}`)
})