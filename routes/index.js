const express = require('express')

const router = express.Router()

const login = require('./modules/login')
const home = require('./modules/home')

router.use('/home', home)
router.use('/', login)

module.exports = router
