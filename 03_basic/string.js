// const name = "rahul"
// const repoCount = 10
// console.log(name + repoCount + "thank"); this is old way  to concatenate 

// console.log(`Hello my name is ${name} and repo count is ${repoCount}`);

const gameName = new String("rahul_rock")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase()); // we can check all function from any variable
console.log(gameName.charAt(4));
console.log(gameName.indexOf('k'));


const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(-8, 3)
console.log(anotherString);




const newStringOne = "      rahul    "
console.log(newStringOne); // it will print as given input including white space
console.log(newStringOne.trim()); // it will print without space , triming white space

const url = "https://rahul.com/rahul%20chaudhary"

console.log(url.replace('%20', '_')); // "replace" replace the word or symbol or any text 


console.log(url.includes('rahula')); // it will print false , because it is not available
console.log(url.includes('rahul')); // it wil print true , because it is available in string


console.log(gameName.split('_'));