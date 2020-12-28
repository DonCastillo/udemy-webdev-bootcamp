
// creating an explicit promise that returns a string
const testPromise = () => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 100) + 1;
        if(delay > 50) {
            resolve('Success'); // string here gets passed to the then statement
        } else {
            reject('Fail'); // string here gets passed to the catch statement
        }
    });
}

testPromise()
.then(msg => console.log(msg, 'Congratulations!')) // returns another promise
.catch(er => console.log(er, 'Try Again')); // returns another promise


/****************************************************************************************** */
// creating an explicit promise that returns an obj
const divide = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if(num2 < 1)
            reject({result: 'Cannot be computed'});
        else
            resolve({result: `${num1 / num2}`});
    });
}

const div = (a, b) => divide(a, b).then(x => x.result).catch(x => x.result);

console.log( div(10, 0) );
console.log( div(10, 10) );
console.log( div(10, 0.4) );

/****************************************************************************************** */
// print rainbow colors

const bgColor = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve(); // put the resolve() where action is considered successful
        }, delay);
        
    })
}

// change document background color every 1 second
// bgColor('red', 1000)
//     .then(() => bgColor('orange', 1000))
//     .then(() => bgColor('yellow', 1000))
//     .then(() => bgColor('green', 1000))
//     .then(() => bgColor('blue', 1000))
//     .then(() => bgColor('indigo', 1000))
//     .then(() => bgColor('violet', 1000));
    
// does the same thing as using then.
async function changeColor() {
    await bgColor('red', 1000)
    await bgColor('orange', 1000)
    await bgColor('yellow', 1000)
    await bgColor('green', 1000)
    await bgColor('blue', 1000)
    await bgColor('indigo', 1000)
    await bgColor('violet', 1000)
}
