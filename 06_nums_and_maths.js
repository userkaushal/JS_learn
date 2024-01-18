const numone = 50;
console.log(numone);

const balance = new Number(500);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const othernum = 123.5645;
console.log(othernum.toPrecision(4));

const zeros = 100000;
console.log(zeros.toLocaleString('en-IN'));

//-----------------------Maths-----------------------//

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.abs(4));
console.log(Math.ceil(5.98));
console.log(Math.floor(4.93));
console.log(Math.round(5.55));


console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10));

const min = 5;
const max = 10;

// console.log(Math.floor(Math.random() * 10) + (max - min));
console.log(Math.floor(Math.random() * (max - min + 1) ) + min);


