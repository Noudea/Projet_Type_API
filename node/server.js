require('dotenv').config()
const express = require('express')
const Logger = require('./tools/logger')
const app = express()
const port = process.env.PORT || 3000
const router = express.Router()

app.use(Logger)
app.use(router)

app.use('/',require('./routes'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

