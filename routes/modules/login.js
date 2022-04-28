// url = localhost:3000/
const express = require('express')
const router = express.Router

// login 頁面
router.get('/', (req, res) => {
  res.render('login')
})

// 接login回傳的資料
router.post('/', (req, res) => {

})

module.exports = router