//Array

const myarr = [0,1,2,3,4,5];
const heros = ["ironman", "captain"];

const myarr2 = new Array(0, 1, 2, 3, 4, 5);
console.log(myarr);
console.log(heros);
console.log(myarr2);

console.log(myarr.includes(4));
console.log(myarr.indexOf(3));

console.log("A:" ,myarr);
console.log(myarr.slice(2,5));
console.log(myarr);


console.log("B:" ,myarr);
console.log(myarr.splice(2,5));
console.log(myarr);