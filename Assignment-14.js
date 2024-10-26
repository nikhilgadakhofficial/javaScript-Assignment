// Global And Local Scope in Js

var a = 300 // Global Scope

if(true){   
let a = 20
const b = 30  // Block Scope
  console.log("INNER :" ,a);
}
 console.log(a);
 // console.log(b);

 // Nested Scope in Js

 function one(){     // Parents Function 
    const username = "Nikhil"

    function tow(){   // children Function 
        const website = "youtube"
        console.log(username);             // Note : children function are access the parents variable 
                                                //  ,But parents function not access the children variable
    }
   //  console.log(website); 

    tow()
 }
 // console.log(username);

 one()

 if(true){
    const username = "Gadakh"

    if(username === "Gadakh"){
        const website = " youtube"
        console.log(username + website);
    }
   // console.log(website);
 }
  // console.log(username);

 // ******************** Interesting *************

 console.log(addOne(5)) // This is allow

 function addOne(num){
    return num + 1
 }
 // addOne(5)


 // console.log(addTow(5)) This Not allow

 const addTow = function(num){
    return num + 2
 }
 console.log(addTow(5))