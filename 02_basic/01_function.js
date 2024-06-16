// function sayMyName (){
//     console.log("R");
//     console.log("A");
//     console.log("H");
//     console.log("U");
//     console.log("L");
// }
//  sayMyName()
// console.log(sayMyName()); // RAHUL with undefined


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }



// function addTwoNumbers(number1, number2){
        // let result = number1 + number2
        // return result
        // return number1 + number2
// }

// const result = addTwoNumbers(3,5)
// console.log("result:", result);

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter your name");
//         return
//     }
//     return `${username} just logged in`
    
// }
// console.log(loginUserMessage("rahul"));
// console.log(loginUserMessage()); // Please enter your name
// console.log(loginUserMessage("rahul")); //rahul just logged in


function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200,300,500,2000));

const user = {
    username: "rahul",
    price: 999

}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)

handleObject({
    username:"sam",
    price: 399
})

const myNewArray = [200, 400, 100, 2000]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));