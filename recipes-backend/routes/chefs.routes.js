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











module.exports = router