// singleton

// const tinderUser = new Object() // singleton
const tinderUser = {} // non-singleton

tinderUser.id = "123abc"
tinderUser.name = "Rock"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

// const regularUser = {
//     email : "rahul@email.com",
//     fullname: {
//         username:{
//             firstname: "rahul",
//             lastname: "chaudhary",
//         }
//     }
// }
// console.log(regularUser.fullname.username.lastname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}

// const obj4 = Object.assign({},obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2}
// console.log(obj4);
// console.log(typeof obj4);

const users  = [
    {
        id:1,
        email: "rahul@mail.com"
    },
    {
        id:1,
        email: "rahul@mail.com"
    }
]


// console.log(users[1].email);


console.log(tinderUser);

console.log(Object.keys(tinderUser)); // ["id", "name", 'isLoggedIn]
console.log(Object.values(tinderUser)); // ['123abc', 'Rock' false]
console.log(Object.entries(tinderUser)); //  [ [ 'id', '123abc' ], [ 'name', 'Rock' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true
