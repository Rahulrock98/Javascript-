// stack memory(primitive type), heap memory(NOn-primitive)
// every primitive type use stack memory
 
// let myYoutube = "rahul"
// let anotherName = myYoutube
// anotherName = "codewithrahul"
// console.log(myYoutube);
// console.log(anotherName);
// console.log(anotherName);
 
let userOne = {
    email: "rahul@gmail",
    upi: "rahul@ybl",
}
let userTwo = userOne
userTwo.email = "chaiwithrahul@gmail"
console.log(userTwo.email);
console.log(userTwo.email);