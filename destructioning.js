//  destructioning objestion
const myObject = {
    x: 2, j: 5, k: 1, l: 15, s: 2


};
const { x, k } = myObject
// console.log(k);
// destructuring array 
const [r, l,] = [20, 12, 25]
// console.log(p, l,);

// object destructuring 

const { a, p } = { a: 5, l: 5, p: 5 };
// console.log(a, p,
//     );
// array mao to do one line loop magic
const numbers = [4, 5, 10];
let output = [];
//  this by function'
// function doubleId(number){
//     return number * 2
// };
// const doubleId = number => number * 2;

// for (const number of numbers) {
//     const result = doubleId(number);
//     output.push(result);
// }
// console.log(output);
// // 1. loop
//  element diye function call korsi
//  res
let output = numbers.map(x => x * 5);
console.log(output);