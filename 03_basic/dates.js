 //date


 let myDate = new Date()
//  console.log(myDate.toString()); // Fri May 17 2024 12:21:53 GMT+0000 (Coordinated Universal Time)
//  console.log(myDate.toDateString()); // Fri May 17 2024
//  console.log(myDate.toISOString()); // 2024-05-17T12:21:53.485Z
//  console.log(myDate.toJSON()); // 2024-05-17T12:21:53.485Z
//  console.log(myDate.toLocaleDateString()); // 5/17/2024
//  console.log(myDate.toLocaleString()); // 5/17/2024, 12:21:53 PM
//  console.log(myDate.toLocaleTimeString()); // 12:21:53 PM
//  console.log(myDate.toTimeString()); // 12:21:53 GMT+0000 (Coordinated Universal Time)
//  console.log(myDate.toUTCString()); // Fri, 17 May 2024 12:21:53 GMT

//  console.log(typeof myDate); // object 
//  console.log(typeof myDate.toString()); // string
//  console.log(typeof myDate.toJSON()); // string

// let myCreatedDate = new Date(2024, 0, 18)
// console.log(myCreatedDate.toDateString()); // thu jan 18 2024

// let myCreatedDate = new Date(2024, 0, 23, 4, 5)
// console.log(myCreatedDate.toLocaleString()); // 1/23/2024m 4:05:00 AM

// let myCreatedDate = new Date("2024-01-14")
// console.log(myCreatedDate.toLocaleString()); // 1/14/2024, 12:00:00 AM

// let myCreatedDate = new Date("12-09-2-24")
// console.log(myCreatedDate.toLocaleString()); // invalid date

// let myCreatedDate = new Date("01-14-2024")
// console.log(myCreatedDate.toLocaleString()); // mm-dd-yy

let myCreatedDate = new Date("01-14-2024")

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newdDate = new Date()
// console.log(newdDate);
// console.log(newdDate.getMonth());
// console.log(newdDate.getDay());

// `${newdDate.getDay()} and the time is `

newdDate.toLocaleString('default', {
  weekday : "narrow",   
})
console.log(newdDate.toLocaleString());