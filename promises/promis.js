
// const promisOne = new Promise(function (resolve, reject) {
//     // do an async task
//     // DB calls, cryptography, netwrok call
//     setTimeout(function () {                                            // this is the longest way to write the code
//         console.log('async task is complete');
//         resolve()
//     }, 1000);
// })

// promisOne.then(function () {
//     console.log("Promis consumed ");
// })


// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Async task 2");
//         resolve()
//     }, 1000)                                        // this is shortes way to write this code 

// }).then(function(){
//     console.log("Async task 2 cosumed");
// })





// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("async task complete");
//     }, 1000);
// }).then(function(){
//     console.log("async task resolve");
// })



// const promisTwo = new Promise(function(resolve,reject){
//     setTimeout(function() {
//         resolve({username: 'rahul', email:'rock@gmail.com'})
//     }, 1000);
// }).then(function(user){
//     console.log(user);

// })

// promisTwo.then(function(user){
//     console.log(user);                   // this way is also work if we contain value in a variable
// })




const promisThree =  new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true                                                     // this code based on error=true ----------- error=false code is given below---:
        if(!error){
            resolve({username:'rahul', email:'rahul@gmail.com'})
        }
        else{
            reject('ERROR: Something went wrong!')
        }
    }, 1000);
})
promisThree.then((user)=>{
    return user.username
}).then((username)=>{
    console.log(username  );
}).catch((error)=>{
    console.log(error);
}).finally(()=> {console.log(" finally either resolve or rejected");})

// const promisThree =  new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username:'rahul', email:'rahul@gmail.com'})
//         }
//         else{
//             reject('ERROR: Something went wrong!')
//         }
//     }, 1000);
// })
// promisThree.then((user)=>{
//     return user.username
// }).then((username)=>{
//     console.log(username  );
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=> {console.log(" finally either resolve or rejected");})


const promisFour = new Promise(function(resolve, reject){
    setTimeout( function()  {
        let error = true
        if(!error){
            resolve({username:'rahul', email:'rahul@gmail.com'})
        }
        else{
            reject('ERROR: Something went wrong!')
        }
    }, 1000);
})

async function consumePromisFour(){
  try {
    const response = await promisFour
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromisFour()