const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs')
const cors = require('cors')
const port = process.env.PORT || process.argv[2] || 8080

app.use(bodyParser.json())
app.use(cors())
app.listen(port, () => console.log(`Server listening on port ${port}!`))
