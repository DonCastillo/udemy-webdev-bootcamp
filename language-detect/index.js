const process = require('process');
const franc = require('franc');
const langs = require('langs');
const colors = require('colors');



const input = (process.argv.slice(2)).join(' ');
const lang = franc(input);
try {
    console.log( (langs.where('3', lang).name).green ); 
} catch (e) {
    console.log( 'Could not match a language. Please try again with a larger sample'.red );
}

