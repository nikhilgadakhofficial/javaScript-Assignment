// Data types Notes 

// Prinitive 

// 7 type: String, Number, Boolearn, Null, nudefind, symbol, Bigint


let name = "Nikhil " // string 
let age = 20 // number 
let isLoggedIn = false // boolean 
let outSideTemp = null // null
let state; // nudefind
//symbol
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 123467890007654n // Bigint



// Reference ( Non Prinitive )

// Array, Objects, Functions

let Array  = ["Nikhil","Om","Ram"]

let myObj = {
    name:"nikhil",
    age: 12
}

const myFunction =  function(){
    console.log("Hi Nikhil");
}

console.log(typeof  Array  ) ;


// ********************* Stack And Heap Memory in Js *********************

// Stack (Prinitive ) Get the Coyp 

let myName = "Nikhil"

let anotherName = myName
anotherName = "Gadakh"

console.log(myName);
console.log(anotherName);

// Heap  ( Non Prinitive ) Get the Original 

let userOne = {
    email : "nikhil@gmail.com",
    age : 20
}

let userTow = userOne

userOne.email = "gadakh@gmail.com"

console.log(userOne.email);
console.log(userTow.email);