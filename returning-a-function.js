/**
 *  Example of function returning another function
 */

 function setAgeRange(min, max) {
     return function(num) {
         return (min <= num && max >= num); 
     }
 }

 let isChild = setAgeRange( 0, 17 );
 console.log( isChild( -1 ) ); // false
 console.log( isChild( 0 ) ); // true
 console.log( isChild( 5 ) ); // true
 console.log( isChild( 17 ) ); // true
 console.log( isChild( 18 ) ); // false

 console.log("--");

 let isAdult = setAgeRange( 18, 64 );
 console.log( isAdult( 17 ) ); // false
 console.log( isAdult( 18 ) ); // true
 console.log( isAdult( 33 ) ); // true
 console.log( isAdult( 64 ) ); // true
 console.log( isAdult( 65 ) ); // false

 console.log("--");

 let isSenior = setAgeRange( 65, 100 );
 console.log( isSenior( 64 ) ); // false
 console.log( isSenior( 65 ) ); // true
 console.log( isSenior( 77 ) ); // true
 console.log( isSenior( 100 ) ); // true
 console.log( isSenior( 101 ) ); // false