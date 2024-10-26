// Control Flow in JS Or Conditional Statement
// 1 : if Statement : Executes a block of code if the specified condition is true.

// 2 :if-else Statement : Executes one block of code if the condition is true and a different block if the condition is false.

// 3 :if-else-ladder Statement : Executes a specific block of code from a series of options based on multiple conditions.

// 4 : nested-if Statement : Uses an if statement inside another if statement to create a hierarchy of conditions.

 // 4 : switch-case Statement : Provides an efficient way to handle multiple possible conditions by associating them with specific code blocks.

 // if 
 // < , > , <= , >= , != , === 
// if (condition) {
         // True  Statement
// }
 const isUserLoggedIn = true

 if (isUserLoggedIn){
      console.log("True");
 }

 if ( 2 == "2"){
    console.log("True");
 }
 if ( 2 === "2") {
    console.log("True");
 }

 if ( 2 != 3) {    // Condition is  Qus from : 2 is not eqal from 3 // Output is true
   console.log("True");
 }

 // if-else Statement 

 // if (condition) {
         // True  Statement
 // } else {
    // false Statement
 //}

 const temprature = 41

 if ( temprature < 50 ) {     // > geater than : या पेक्षा मोठे   // < less than :   या पेक्षा कमी  
     console.log("less than 50");
 }
 else{
   console.log("geater than 50");
 }

 const score = 200 

 if (score > 100) {
   const power = "fly"
   console.log(`User power is : ${power}`);
 }

 //const blance = 1000 

 // if (blance > 500) console.log("True"); // This is allow ,but donot use

// if-else-ladder Statement 
 const blance = 1000 

 if (blance < 500){
   console.log("less than 500 ");
 }
 else if (blance < 750){
   console.log("less than 750");
 }
 else if (blance < 950){
   console.log("less than 950");
 }
 else
 {
   console.log("less than 1200");
 }


 // nested-if Statement 

 const isUserLogged = true
 const debitCard = true
 const loggedInEromGoogle = true
const loggedInEromEmail = false

 if (isUserLogged && debitCard) { // && : Two  Conditional have True 
      console.log("Allow to buy coures");
 } 
 if (loggedInEromGoogle || loggedInEromEmail) { // One Conditional have True
   console.log("User logged in");  
 }
 else{
   console.log("Not Mach");
 }

// switch-case Statement
 
// switch (key) {
  //  case value:
      
    //  break;

   // default:
    //  break;
 // }

 const month = 3
 switch (month) {
   case 1:
      console.log("January");
      break;
   case 2:
      console.log("Feb");
      break;
   case 3:
      console.log("march");
      break;
   case 3:
      console.log("april");
      break;
 
   default:
      console.log("Not match");
      break;
 }

 // Ex 
 
 const month2 = "april"
 switch (month2) {
   case "january":
      console.log("January");
      break;
   case "feb":
      console.log("Feb");
      break;
   case "march":
      console.log("march");
      break;
   case "april":
      console.log("april");
      break;
 
   default:
      console.log("Not match");
      break;
 }

 // truthy  falsy Statement

 // falsy value
 //  false , 0 , -0 , BigInt , "" , null , undefined , NaN

 // truthy  value 
 // "0" , 'false', " " , [] , {} , function(){}

    // Ex no= 1: 

 const userEmail = []

 if (userEmail){
   console.log("Got user email");
 }
 else{
   console.log("DOnt have user email");
 }

 // Ex no = 2 Q) How to check truthy empty  [] 

 if (userEmail.length == 0) {
   console.log("Array is empty"); 
 }

 // Ex no = 3 Q) How to check truthy empty {} 
 const emptyObj = {}

 if (Object.keys(emptyObj).length == 0) {
        console.log("Object is empty");
 }
 

 // NUllish Coalescring Opertor (??) : null undefinde

 let val1;
 // val1 = 5 ?? 10 // Output : 5
 // val1 = null ?? 10 // output : 10
// val1 = undefined ?? 15 // output : 15
val1 = null ?? 10 ?? 16 // output : 10
 console.log(val1);

// Terniary Operator 

// condition ? true Statement : false Statement

const iceTeaPrice = 100
 iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("more than 80");