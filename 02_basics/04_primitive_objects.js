//primitive data types of 7 types = N N B B S S U

let a = null;
let b = 123;
let c = false;
let d = BigInt("543")+BigInt("3");
let e = "kaushal";
let f = Symbol("I am a good symbol");
let g = undefined;

console.log(a, b, c, d, e, f, g);
console.log(typeof d);

//non-primitive datatypes objects

let obj = {
    "name": "kaushal",
    "age": 15,
    "code": undefined,
    friend: true
}

console.log(obj["name"]);