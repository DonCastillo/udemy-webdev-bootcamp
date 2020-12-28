fetch('https://coronavirus-19-api.herokuapp.com/all')
    .then(response => {
        console.log('Fetching...', response);
        return response.json(); // parses json
        //throw new Error('sss');
    })
    .then(data => {
        console.log('world cases:', data.cases);
        console.log('world deaths:', data.deaths);
        console.log('world recovered:', data.recovered);
    })
    .catch(e => {
        console.log('ERROR!', e);
    });