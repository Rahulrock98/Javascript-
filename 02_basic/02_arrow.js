const user = {
    username : "rahul",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = " rock"
// user.welcomeMessage()


const chai = () => {
    let username = "rahul"
    console.log(this.username); // undefined
}

// chai()

// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }
// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) =>  (num1 + num2) // implecit retrun

const addTwo = (num1, num2) =>  ({username : "rahul"})



console.log(addTwo(3,4));

// const myArray = [2,4,21,2,1,2]
// myArray.forEach( () => {})