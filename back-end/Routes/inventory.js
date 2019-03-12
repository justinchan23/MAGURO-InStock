const express = require('express')
const router = express.Router()
const fs = require('fs')
const inventory = require('../Database/inventory')
const faker = require('faker')
const data = require('../Database/inventory')

router.get('/', (req, res) => {
  res.json(data)
})

router.post('/', (req, res) => {
  const newInventoryItem = {
    id: faker.random.number(),
    name: req.body.name,
    short_description: req.body.short_description,
    long_description:
      "Here is a more detailed summary of the product name, it's uses, inductries and possible attributes that could be used to descript the product.",
    ordered_by: faker.name.findName(),
    last_ordered: req.body.last_ordered,
    location: req.body.city + ', ' + req.body.country,
    quantity: req.body.quantity,
    reference_number: faker.finance.bic(),
    in_stock: req.body.in_stock,
    categories: ['Industrial', 'Automotive', 'Heavy', 'Mechanical', 'Engineering', 'Sales']
  }

  if (req.body.name !== undefined) {
    inventory.push(newInventoryItem)

    // uncomment next line for production
    // fs.writeFileSync('../Database/inventory.json', JSON.stringify(inventory))

    res.status(200).send({
      success: true,
      message: req.body.name + ' item has been added.',
      body: [inventory]
    })
  } else {
    res.status(400).send({
      success: false,
      message: 'Post body required'
    })
  }
})

router.get('/:id', (req, res) => {
  const inventoryItem = inventory.find(item => {
    return item.id == req.params.id
  })
  inventoryItem ? res.send(inventoryItem) : res.status(404).send('Item not found')
})

router.delete('/:id', (req, res) => {
  const inventoryIndex = inventory.findIndex(item => {
    return item.id == req.params.id
  })
  if (inventoryIndex) {
    inventory.splice(inventoryIndex, 1)
    // uncomment next line for production
    // fs.writeFileSync('../Database/inventory.json', JSON.stringify(inventory))
    res.send('Item has been deleted')
  } else {
    res.status(400).send('Could not find item with that ID')
  }
})

router.put('/:id', (req, res) => {
  const inventoryItem = inventory.find(item => {
    return (item.id = req.params.id)
  })
  if (inventoryItem) {
    inventoryItem.long_description = req.body.long_description
    inventoryItem.ordered_by = req.body.ordered_by
    inventoryItem.reference_number = req.body.reference_number
    inventoryItem.last_ordered = req.body.last_ordered
    inventoryItem.location = req.body.location
    inventoryItem.quantity = req.body.quantity
    inventoryItem.in_stock = req.body.in_stock
    inventoryItem.categories = req.body.categories

    // uncomment next line for production
    // fs.writeFileSync('../Database/inventory.json', JSON.stringify(inventory))
    // console.log(inventoryItem)
    res.send({ message: 'Successfull updated item', item: inventoryItem })
  } else {
    res.status(400).send('Could not find item with that ID')
  }
})

module.exports = router
