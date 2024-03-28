
const mongoose = require('mongoose')


// Schema creation

const recipeSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    instructions:{
        type:String,
        required:true
    },
    level:{
        type:String,
        enum: ['Easy Peasy','Amateur Chef','UltraPro Chef']
    },
    duration:{
        type:Number,
        min:[0,"NEEDS TO BE MORE THAN 0"]
    },
    chef:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Chef"
    }
})


const Recipe = mongoose.model('Recipe',recipeSchema)


module.exports = Recipe


