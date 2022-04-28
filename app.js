const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send(`check-users is running`)
})

app.listen(PORT, () => {
  console.log(`Running check-users on localhost:${PORT}`)
})