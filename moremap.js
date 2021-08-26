const friends = ['tom hari', 'tom gari', 'kingjon', 'haripottery'];

const fLengths = friends.map(friend => friend.length);
console.log(fLengths);
const products = [
    { name: 'water', price: 15, color: 'yellow' },
    { name: 'mobile', price: 1500, color: 'red' },
    { name: 'watch', price: 15, color: 'blue' },
    { name: 'car', price: 250000, color: 'white' },
    { name: 'keyboad', price: 200, color: 'black' },
    { name: 'mouse', price: 105, color: 'lightblack' },
    { name: 'paper', price: 215, color: 'brown' }

];
const productName = products.map(product => product.name);
const productPrice = products.map(product => product.price);
// console.log(productPrice);
// map will return 
// products.map(product => console.log(product)); 
// foreach will not retun
products.forEach(product => console.log(product));
const name = "Adam Sandler";
const greeting = 'Hello adam sandler welcome to the club';
console.log(greeting);


