const express = require('express')
const router = express.Router()
const fs = require('fs')
const data = require('../Database/inventory')

router.get('/:id', (req, res) => {
  const inventoryItem = data.find(item => {
    return item.id == req.params.id
  })
  inventoryItem ? res.send(inventoryItem) : res.status(404).send('Item not found')
})

module.exports = router
