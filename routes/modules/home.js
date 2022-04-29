const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  console.log('req.session.isLoggedIn:', req.session.isLoggedIn)
  res.render('index', { value: req.session.firstName })
})

module.exports = router
