const mongoose = require('mongoose')

// create schema, blueprint of the model
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['fruit', 'vegetable', 'dairy']
    }
})

// create model the model
const Product = mongoose.model('Product', productSchema)

module.exports = Product