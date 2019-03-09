const express = require('express')
const router = express.Router()
const fs = require('fs')
const data = require('../Database/warehouses')

router.get('/', (req, res) => {
  res.send(data)
})

router.get('/:id', (req, res) => {
  const warehouseInventory = data.find(warehouse => {
    return warehouse.id == req.params.id
  })
  warehouseInventory
    ? res.send(warehouseInventory.inventory)
    : res.status(404).send('That item does not exist')
})

module.exports = router
