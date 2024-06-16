

// if (true){
//     // let a = 20
//     // const b = 10
//     var   c = 30
// }
// // console.log(a);
// // console.log(b);
// console.log(c);



var a = 300
if(true){
    let a = 10
    const b  = 20
    var c = 30
//  console.log("inner:", a);

}
//  console.log( a)

function one (){
    const username = "rahul"

    function two(){
        const website = " youtube"
        console.log(username); // this is just a call for username it will not print the return
    }

// console.log(website);
// two() // this will print the username or whatever given value to print or whatever given value in the fucntions
}
// console.log();
// one()/


if(true){
    const username = "rahul"
    if(username === "rahul"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// ---------------------------------------------------------------------------------------------------------------------------------------------------------

console.log(addone(5));
function addone(num){
    return num + 1
}




console.log(addTwo(5)); 
const addTwo = function(num){
    return num + 2
}
