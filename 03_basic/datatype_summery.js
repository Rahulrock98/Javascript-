// Primitive
// 7 types -
// String , Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 124728349239472349242n    // bigInt
console.log(bigNumber); 

// Reference (Non-primitive)
//Arrey, objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {                  // we can take these object  in a variable
    name: "rahul",
    age:22,
}

const myFunction = function(){
    console.log("Hello world!");
}

console.log(typeof myFunction);  // we can check all variable's datatype from 'typeof' function