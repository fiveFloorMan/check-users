// url = localhost:3000/login
const express = require('express')
const router = express.Router()
const Users = require('../../models/user')

// login 頁面
router.get('/', (req, res) => {
  
  res.render('login')
})

// 接login回傳的資料
router.post('/', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  Users.findOne({ email, password })
    .lean()
    .then(user => {
      if (user === null) {
        return res.render('login', { errorMessage: 'email or password is error' })
      }
      req.session.isLoggedIn = true
      req.session.firstName = user.firstName
      res.redirect('/')
    })
    .catch(error => console.log(error))
})

module.exports = router
