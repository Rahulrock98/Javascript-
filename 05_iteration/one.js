// for 

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//         if ( element == 6 ){
//             console.log("You reached 6 points");
//     }
//     console.log(element);
// }
// // console.log("excuted two");

//    for (let i = 0; i <=10; i++) {
//     const element = i ;
//     console.log(element);

//    }


// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);    
//     for (let j = 0; j <= 10; j++) {
//         const element = j;
//         // console.log(`Inner loop value : ${j} nd inner loop is ${i}`);
//         console.log(i + '*' + j + ' = ' + i*j);
//     }
// } 



// let myArray = [ "flash",  "batman", "superman"]
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//  console.log(element);   
// }


// break annd continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("detected 5");
//         break
//     }
//     console.log(`value of index is ${index}`);
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("detected 5");
        continue // continue skip one mistake and continue return
    }
    console.log(`value of index is ${index}`);
}