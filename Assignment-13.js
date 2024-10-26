// functions and parameter

function sayName(){ 
    console.log("Nikhil");
    console.log("Gadakh");
}
sayName()

/*

function addTowNumber(number1,number2){   // (number1,number2) this is parameter 
        console.log(number1 + number2)
}
addTowNumber(3,2) // (3,2) this is Argument 


function addTowNumber(number1,number2){
    console.log(number1 + number2)
}
addTowNumber(3,"2") // Output : 32


function addTowNumber(number1,number2){
    console.log(number1 + number2)
}
addTowNumber(3,"a") // output : 3a


function addTowNumber(number1,number2){
    console.log(number1 + number2)
}
addTowNumber(3,null)  // output : 3


function addTowNumber(number1,number2){
    console.log(number1+number2); // output is : 5
}
const result = addTowNumber(3,2)
console.log(result);  // output is : undefined

*/
function addTowNumber(number1,number2){
  //  let result = number1 + number2
  // return result
  return number1 + number1
}

const result = addTowNumber(3,2)

console.log("result", result);

function loginUserMessage(username){
    if(username === undefined){
     console.log("Please enter a username");
     return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Nikhil")) 
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());

function calculateCartPrice(val1,val2,...num1){ // rest Oprater
      return num1
}
console.log(calculateCartPrice(200,300,342,300));

 
// Functions with Object and array

const user = {
    name : "Nikhil",
    age : 20
}
function handleObject(anyObj){
    console.log(`User name is ${anyObj.name} and Age is ${anyObj.age}`);
}
// handleObject(user)
handleObject({
    name : "OM",
    age : 19
})

// Array 

const myNewArray = [200, 300, 700, 890]

function returnArray(getarray ){
   return getarray[1]
}
console.log(returnArray(myNewArray));