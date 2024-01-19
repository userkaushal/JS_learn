// Dates

let myDate = new Date();
console.log(myDate);
console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

// let createDate = new Date(2024,0,14);
// let createDate = new Date(2024,0,14,1,3);
// let createDate = new Date("2024-01-18");
let createDate = new Date("01-18-2024");

// console.log(createDate.toLocaleString());

let timestamp = Date.now();
console.log(timestamp);
console.log(createDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{weekday:"short"}));