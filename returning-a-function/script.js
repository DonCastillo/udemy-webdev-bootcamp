/**
 *     High-Order functions are functions that can 
 *     accept and return other functions
 * 
 */



/**
 *      Example of function accepting another 
 *      function as paremeter
 */
function func1(){
    return [1, 2, 3];
}
function func2(){
    return [4, 5, 6];
}
function func3(){
    return [7, 8, 9];
}

// function that accepts another function
function square(func) {
    let numbers = func(); // don't forget to invoke the function by 
                          // adding open-clos parenthesis
    return numbers.map(x => x ** 2);
};

console.log( square( func1 ) ); // [1, 4, 9]
console.log( square( func2 ) ); // [16, 25, 36]
console.log( square( func3 ) ); // [49, 64, 81]