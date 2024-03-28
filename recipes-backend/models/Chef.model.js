
const mongoose = require('mongoose')


const chefSchema = new  mongoose.Schema({

    name:String,
    age:Number
})


const Chef = mongoose.model('Chef',chefSchema)


module.exports = Chef