
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
        min: [1,"0 is the minimum value Please input a number bigger than 0. PLEASE PLEASE"]
    },
    chef:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Chef"
    }
})


const Recipe = mongoose.model('Recipe',recipeSchema)


module.exports = Recipe


