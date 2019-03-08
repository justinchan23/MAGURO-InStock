const express = require('express')
const router = express.Router()
const fs = require('fs')
const data = require('../Database/warehouses')

router.get('/', (req, res) => {
  res.json(data)
})



module.exports = router
