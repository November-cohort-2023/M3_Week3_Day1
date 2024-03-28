const Chef = require('../models/Chef.model')

const router = require('express').Router()




router.post('/chefs',(req,res)=>{

    Chef.create(req.body)
    .then((createdChef)=>{
        res.json(createdChef)
    })
    .catch((err)=>{
        console.log(err)
    })
})


router.get('/chefs',(req,res)=>{

    Chef.find()
    .then((allChefs)=>{
        res.json(allChefs)
    })
    .catch((err)=>{
        console.log(err)
    })
})









module.exports = router