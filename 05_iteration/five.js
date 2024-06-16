const  coding = ["js", "rubby","java", "python", "cpp"]

// coding.forEach( function (val) {
//     console.log(val);
// })

// coding.forEach(  (val) => {
//     console.log(val);
// }
// )



// function printMe(r){
//     console.log(r);
// }
// coding.forEach(printMe)

// coding.forEach (  (item, index, arr) => {
// console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName : "javascirpt",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
]

myCoding.forEach( (item) =>{
    console.log(item.languageName, 'file type is ', item.languageFileName);
})