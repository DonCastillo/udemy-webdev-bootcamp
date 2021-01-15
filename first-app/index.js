const express = require('express');
const app = express();

//console.dir(app);

/**
 *  @param  req     request
 *  @param  res     response
 *  these are default params
 */
// app.use((req, res) => {
//     console.log('We got a new request!');
//     // res.send('Hello, we got your request. This is our response');
//         // returns a plain text
//     // res.send({color: 'red'})
//         // returns as a json object
//     // res.send('<h1>This is my webpage</h1>')
//         // returns as a markup
// });

app.get('/', (req, res) => {
    res.send('This is the home page');
});

app.get('/cats', (req, res) => {
    console.log("CAT REQUEST!!");
    res.send('MEOW');
});

app.post('/cats', (req, res) => {
    res.send('POST REQUEST TO /cats');
});

app.get('/dogs', (req, res) => {
    console.log("DOG REQUEST!!");
    res.send('WOOF');
});

app.get('*', (req, res) => {
    res.send('I don\'t know that path');
});



app.listen(3000, () => {
    console.log('listening on port 3000!');
});