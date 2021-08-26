// const numbers = [2, 5, 20, , 26, , 25, 36, 56];
// const bigNumber = numbers.filter(number => number > 21);
// const smallNumber = numbers.filter(number => number < 21);
// // console.log(smallNumber);

// const nums = [1, 2, 3, 4, 5];
// // let output = nums.filter(n => n % 2);
// // console.log(output);
// function min(nums) { return Math.min(nums) }
// console.log(min([1, 3, 2]));
// const cube = x => x * x * x; console.log(cube(2));
// const [a, b] = [1, 2, 3, 4, 45, 5]; console.log(a + b);
// const { x, y, z } = { x: 1, y1: 2, z: 3 };
// console.log(y);
// const nums = [1, 2, 3, 4, 5]; let output = nums.filter(n => n % 2); console.log(output);
// const friends = ["Moushumi", "Misha", "Manna", "mimi", "mahiya"];
// friends.find(friend => friend.length == 5);
const firstName = 'palash';
const lastName = 'sarkar';
const fullName = ` this is the  fullmane take it man ${firstName} ${lastName}`;
// console.log(fullName);


//  funtion declaration

function add(num1, num2) {
    return num1 * num2
}
const sum1 = add(15, 15);
console.log(sum1);

//  function expression
const add2 = function add2(num1, num2) {
    return num1 + num1;
};
const sum2 = add2(15, 25);
console.log(sum2);
// this function can not call from on his top **


// function exporession (anonymous)
const add3 = function (num1, num2) {
    return num1 / num2;
};
const sum3 = add3(15, 3);
console.log(sum3);

// arrow function****
// one parameter arrow function
const fiveTime = num => num * 5;
const output = fiveTime(100);
console.log(output);
// ***without parameter arrow function***
const getName = () => 'palash sarkar'
const value = getName();
console.log(value);

// two parameter function
const add4 = (num1, num2) => num1 / num2;
const sum4 = add4(15, 3)
console.log(sum4);
// three parameter arrow function
const add5 = (num1, num2, num3) => num1 * num2 * num3
const sum5 = add5(5, 2, 5);
console.log(sum5);
// multiline parameter arrow function ** multiline must you have  to return it 
const doMath = (a, d) => {
    const sum = a + d;
    const diff = a - d;
    const result = sum * diff;
    const output = result / 5
    return output;

}
const total = doMath(5, 9);
console.log(total);











