// if 


// const isUserLoggedIn = true
// const temp = 45

// if(temp < 50){
//     console.log("temperature below 50 deg");
// } else{
//     console.log("temperature is more than 50"); , if you use 'if' statement than 'else' is compelsory to write.

// }


// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`user power : ${power}`);
// }
// console.log(`user power : ${power}`); // output -- power is not defined because this excution , excuting out of scope value or its not excuting global value.

// const  balance = 1000 
// if(balance > 500) console.log("test"), console.log("testing"); ... this code of line is excutable but its not recommonded because readability is too poor.



// const balance= 1000
// if(balance < 500){
// console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 750");
// } else if(balance < 950){
//     console.log("less than 950");
// } 
// else{
//     console.log("less than 1200");
// }




const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(isUserLoggedIn && debitCard){
    console.log("allow to buy courses");
} 
if (loggedInFromGoogle || loggedInFromEmail){
    console.log("You can Acceces");
}