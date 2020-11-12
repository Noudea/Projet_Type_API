const router = require('express').Router()

//Nous sommes déjà dans /notes
router.route('/') //localhost:PORT/notes/
.get((req,res) =>
{
    res.send('ma liste de note')
})

module.exports = router