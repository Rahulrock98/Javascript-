// Immediatly Invoke Function Expression (IIFE)    

(function chai (){
    // named iife
    console.log(` DB CONNECTED`);
}) ();
//  iife used for avoid global variables pollution 
// 


( (name) => {
// unnamed iffe
    console.log(`DB CONNECTED TWO  ${name}`);
}) ('JARVIS');
 