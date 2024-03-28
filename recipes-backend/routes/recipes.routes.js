const Recipe = require('../models/Recipe.model')


const router = require('express').Router()


// CRUD

router.get('/recipes',(req,res)=>{
    
    Recipe.find()
    .populate('chef')
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

    Recipe.findById(req.params.id)
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
        res.json("Successfully created new Recipe")
    })
    .catch(err=>{
        console.log(err)
        res.json(err)

    })
})



router.put('/recipes/:id',(req,res)=>{

    Recipe.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((updatedRecipe)=>{
        res.json(updatedRecipe)
    })
    .catch(err=>{
        console.log(err)
        res.json(err)

    })

})



router.delete('/recipes/:id',(req,res)=>{

    Recipe.findByIdAndDelete(req.params.id)
    .then((deletedRecipe)=>{
        res.json(deletedRecipe)
    })
})






module.exports = router




/* 
steps to creating routes

1. import the router

2. export the router

3. mount the router in app.js

*/