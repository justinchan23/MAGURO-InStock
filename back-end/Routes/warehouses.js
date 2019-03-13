const express = require('express')
const router = express.Router()
const fs = require('fs')
const warehouses = require('../Database/warehouses')
const faker = require('faker')

router.get('/', (req, res) => {
  res.send(warehouses)
})

router.get('/:id', (req, res) => {
  const warehouseInventory = warehouses.find(warehouse => {
    return warehouse.id == req.params.id
  })
  warehouseInventory
    ? res.send(warehouseInventory)
    : res.status(404).send('That item does not exist')
})

router.post('/', (req, res) => {
  const newWarehouse = {
    id: faker.finance.mask(),
    warehouse_name: req.body.warehouse_name,
    address: req.body.address,
    postal_code: faker.address.zipCode(),
    country_code: faker.address.countryCode(),
    contact_name: req.body.contact_name,
    contact_title: req.body.contact_title,
    contact_phone: req.body.contact_phone,
    contact_email: req.body.contact_email,
    categories: req.body.categories,
    inventory: []
  }

  if (req.body) {
    warehouses.push(newWarehouse)

    // uncomment next line for production
    // fs.writeFileSync('../Database/warehouses.json', JSON.stringify(warehouses))

    res.send({
      success: true,
      message: req.body.warehouse_name + ' has been added'
    })
  } else {
    res.status(400).send({
      success: false,
      message: 'Post body required'
    })
  }
})

module.exports = router
