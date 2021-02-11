const express = require('express')
const app = express()
const path = require('path')
const data = require('./data.json')


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')




app.get('/comments', (req, res) => {
    res.render('comments/index', {data})
})

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})


app.post('/tacos', (req, res) => {
    const {meat, qty} = req.body
    res.send(`OK, here are your ${qty} ${meat} tacos`)
})

app.listen(3000, () => {
    console.log("ON PORT 3000!")
})