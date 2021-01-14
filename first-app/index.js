const express = require('express');
const app = express();

//console.dir(app);

/**
 *  @param  req     request
 *  @param  res     response
 *  these are default params
 */
app.use((req, res) => {
    console.log('We got a new request!');
    // res.send('Hello, we got your request. This is our response');
        // returns a plain text
    // res.send({color: 'red'})
        // returns as a json object
    // res.send('<h1>This is my webpage</h1>')
        // returns as a markup
});

app.listen(3000, () => {
    console.log('listening on port 3000!');
});