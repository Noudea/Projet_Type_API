//Init env
require('dotenv').config()

//Imports
const express = require('express')
const bodyParser = require('body-parser')
const Logger = require('./tools/logger')

const app = express()
//Réglages du port d'ecoutes
const port = process.env.PORT || 3000
const router = express.Router()

//Mise en place du bodyParser afin d'obtenir req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
//Mise en place du logger
app.use(Logger)

app.use(router)
app.use('/',require('./routes'))
app.use('/notes',require('./routes/notes'))


app.listen(port, () => {
    console.log('====================================');
    console.log(`Example app listening at http://localhost:${port}`);
    console.log('====================================');
})



