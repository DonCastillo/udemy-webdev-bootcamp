const express = require('express')
const app = express()
const path = require('path')
const data = require('./data.json')
const fs = require('fs')

// accept data sent from x-www-form-urlencoded
app.use(express.urlencoded({extended: true}))
// accept data as application/json
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
// use ejs templating
app.set('view engine', 'ejs')




const read = () => {
    let file = fs.readFileSync('./data.json')
    return JSON.parse(file)
}

const write = (username, comment) => {
    let file = read()
    file.comments.push({username: username, comment: comment})
    fs.writeFileSync('./data.json', JSON.stringify(file))
}



// lists all comments
app.get('/comments', (req, res) => {
    const data = read()
    res.render('comments/index', {data})
})

// where the form lives
app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})

// creates new comment
app.post('/comments', (req, res) => {
    const {username, comment} = req.body
    write(username, comment)
    res.redirect('/comments')
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