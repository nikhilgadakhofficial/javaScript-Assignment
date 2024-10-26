// Date and time in depth in JS

let myDate = new Date()
console.log(typeof myDate);
console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toISOString());
console.log(myDate.toTimeString());

//let myCreatedDate = new Date(2024,4,25)
// let myCreatedDate = new Date("04-25-2024")
//console.log(myCreatedDate.toDateString());
/*
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));
*/

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(newDate.getFullYear());



