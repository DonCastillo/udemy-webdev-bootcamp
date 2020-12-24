/**
 *  Different ways of defining a method
 */

 const simpleArithmetic = {

    // usual way, using key-value
    add: function(x, y) {
        return x + y;
    }, 

    // function name() way
    subtract (x, y) {
        return x - y;
    },

    // arrow function
    multiply = (x, y) => x * y


 };

 console.log( simpleArithmetic.add( 10, 5 ) );          // 15
 console.log( simpleArithmetic.subtract( 10, 5 ) );     // 5
