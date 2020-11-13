const router = require('express').Router()

let notes =
[
    {
        id : '1',
        title : 'Ma note 1',
        description : 'Ma description 1',
        isEnabled : true,
        isFavorite: false
    },
    {
        id: '2',
        title: 'Ma note 2',
        description: 'Ma description 2',
        isEnabled: true,
        isFavorite: false
    },
    {
        id: '3',
        title: 'Ma note 3',
        description: 'Ma description 3',
        isEnabled: true,
        isFavorite: false
    }
]
//Nous sommes déjà dans /notes
router.route('/') //localhost:PORT/notes/
.get((req,res) => //récupération de la liste de note
{
    res.send(notes)
})
.post((req,res) => {
console.log('body',req.body);
const title = req.body.title
const description = req.body.description

//On teste si la data recue n'est pas nulle
if(!title)
{
    res.status(500).send('Le titre est manquant')
}
else if (!description) 
{
    res.status(500).send('La description est manquante')
} else
{
    //on ajoute la note a la liste de note
    notes.push(
        {
            id : Math.random().toString(36).substr(2,9),
            title: title,
            description : description,
            isEnabled : true,
            isFavorite : false
        })
    res.send(notes)
}
})

.delete((req,res) => {
    const id = req.body.id
    index = notes.findIndex(element => element.id === id);
    console.log(index);
    notes.splice(index,1)
    res.send(notes)
})



module.exports = router