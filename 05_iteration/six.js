// const  coding = ["js", "rubby","java", "python", "cpp"]

//  const value = coding.forEach((item) =>{
//     // console.log(item);
// })
// console.log(value);


const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNum.filter((num) => {
//     return num <= 4
// }  )
// const newNum = []

// myNum.forEach((num) => {
//     if (num > 4) {
//         newNum.push(num)
//     }
// })


// console.log(newNum);

const books=[
    {title:'Book One', genre:'Fiction', publish:1982, edtion:2006},
    {title:'Book two', genre:'history', publish:1978, edtion:2004},
    {title:'Book three', genre:'Non-fiction', publish:1989, edtion:2004},
    {title:'Book four', genre:'Science', publish:1990, edtion:2010},
    {title:'Book five', genre:'History', publish:1976, edtion:2008},
    {title:'Book six', genre:'Fiction', publish:1981, edtion:2008}
]
let bookStore = books.filter( (bk) => bk.publish > 1980 && bk.edtion >2006)
console.log(bookStore);