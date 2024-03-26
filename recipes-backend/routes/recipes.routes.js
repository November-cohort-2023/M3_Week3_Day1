const Recipe = require('../models/Recipe.model')


const router = require('express').Router()


// CRUD

router.get('/recipes',(req,res)=>{
    
    Recipe.find()
    .then((allRecipes)=>{
        console.log(allRecipes)
        res.json(allRecipes)
    })
    .catch(err=>{
        console.log(err)
        res.json(err)

    })
})

router.get('/recipes/:id',(req,res)=>{

    console.log(req.params)

    Recipe.findById(req.params)
    .then((foundRecipe)=>{
        res.json(foundRecipe)
    })
    .catch(err=>{
        console.log(err)
        res.json(err)

    })

})


// Create for new recipe

router.post('/recipes',(req,res)=>{
    console.log(req.body)
    Recipe.create(req.body)
    .then((createdRecipe)=>{
        res.json("recipe successfully created")
    })
    .catch(err=>{
        console.log(err)
        res.json(err)

    })
})








module.exports = router




/* 
steps to creating routes

1. import the router

2. export the router

3. mount the router in app.js

*/