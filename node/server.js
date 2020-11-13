//Init env
require('dotenv').config()

//Imports
const express = require('express')
const bodyParser = require('body-parser')
const Logger = require('./tools/logger')
//connecter a la base de données MongoDB
const mongoose = require('mongoose')
const app = express()
//Réglages du port d'ecoutes
const port = process.env.PORT || 3000
const router = express.Router()

//Initialisation de la connexion a la base de données
const mongoURL = process.env.MONGO_URL + '?retryWrites=true&w=majority'

const dbOptions =
{
    useNewUrlParser : true,
    useUnifiedTopology : true
}

mongoose.connect(mongoURL,dbOptions,error =>
{
    if(error)
    {
        throw error
    }
})


//mode debug
mongoose.set('debug', true)

//connexion à la base de données
const db = mongoose.connection

//Listener d'erreur
db.on('error',console.error.bind(console,'Erreur lors de la connexion'))

//listener connexion réussie
db.once('open', () => 
{
    console.info('Connexion à la base : OK')
})

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



