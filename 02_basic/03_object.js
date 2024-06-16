// objects literals
const mySym = Symbol("key1")
const JsUser  = {
    "name" : "rahul",
    age : 22,
    location : "Patna",
    email : "rahul@gmail.com",
    isLoggedIn : false,
    lastLoginDays  : ["Monday", "Tuesday", "Saturday"],
    [mySym]: "mykey1",

}
// console.log(JsUser.location);
// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(typeof JsUser.name);
// console.log(JsUser.age);
// console.log(JsUser.email);
// console.log(JsUser.isLoggedIn);
// console.log(JsUser[mySym]);
// console.log(typeof [mySym]);

// JsUser.email = "rahul@chatgpt.com"
// Object.freeze(JsUser)
// console.log(JsUser);   
// console.log( typeof JsUser.email);   


JsUser.greeting = function(){
    console.log("hello world ");
}
JsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());