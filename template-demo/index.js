const express = require('express');
const path = require('path');

const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));   // enables to use nodemon outside the current directory

app.get('/', (req, res) => {
    res.render('home')
})


app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    res.render('subreddit', {subreddit})
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1
    // key-value pairs that are accessible in the ejs html template
    res.render('random', {num: num});   
})

app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
    ]
    res.render('cats', {cats})
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})