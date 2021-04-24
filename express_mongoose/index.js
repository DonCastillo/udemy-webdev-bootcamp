const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const Product = require('./models/product')

// setting
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// mongoose
mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Mongo Connection Open')
})
.catch(err => {
    console.log('Oh no Mongo Connection Error!!!')
    console.log(err)
})


// route
app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.render('products/index', {products})
})

app.get('/products/:id', async (req, res) => {
    const {id} = req.params
    const product = await Product.findById(id)
    res.render('products/show', {product})
})

app.listen(3000, () => {
    console.log('Listening on port 3000!')
})