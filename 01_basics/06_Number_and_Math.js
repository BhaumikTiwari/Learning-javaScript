const score = 400;
const balance = new Number(500000);
console.log(balance);

console.log(balance.toString);
console.log(typeof(balance));


console.log(balance.toFixed(2));

let num=78.5;
console.log(num.toPrecision(2));
let num2=178.9878;
console.log(num2.toPrecision(3));


const n=1000000;
console.log(n.toLocaleString('en-IN'));


// **************MATH****************


console.log(Math.abs(-6));
console.log(Math.round(4.5));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.8));
console.log(Math.sqrt(789));
console.log(Math.max(4,5,6,7,8,9));
console.log(Math.min(4,5,6,6,7,8,9));

console.log(Math.random());
console.log((Math.random()*10)+1);

const min=10;
const max=20;
console.log(Math.floor(Math.random() * (max - min + 1)+min))






