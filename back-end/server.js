const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs')
const cors = require('cors')
const port = process.env.PORT || process.argv[2] || 8080
const warehouses = require('./Routes/warehouses')
const inventory = require('./Routes/inventory')

app.use(bodyParser.json())
app.use(cors())
app.listen(port, () => console.log(`Server listening on port ${port}!`))

app.use('/warehouses', warehouses)
app.use('/inventory', inventory)
