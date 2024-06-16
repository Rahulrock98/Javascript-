// reduce 

const myNum = [1,2,3]

// const totalNum = myNum.reduce( function(acc, currval ){
//    console.log(`acc : ${acc} and currval: ${currval}`);
//     return acc  + currval
// }, 0)


const totalNum = myNum.reduce( (acc,currval) => acc + currval,0)

console.log("total value is", totalNum);


const shoppingcart = [
    {
        item : 'js course',
        price: 2999
    },
    {
        item : 'py course',
        price: 1999
    },
    {
        item : 'app dev course',
        price: 3999
    },
    {
        item : 'moblie dev course',
        price: 5999
    }
]
const toPay = shoppingcart.reduce ((acc, item) => acc + item.price, 0)
console.log("you have to pay : "  , toPay);