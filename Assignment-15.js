// THIS and Arrow Function in Js

// Note : THIS is use  on Normal Function  Not Arrow Function 

const user = {
    username: " Nikhil",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
 // user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

//function chai(){
  //  let username = "Nikhil"
    // console.log(this.username);
// }
// chai()

const chai = ()=>{
    let username = "Nikhil"
    console.log(this);
}
// chai()

// Arrow Function

// Syntax of Arrow Function

 ()=>{

}

const addTwo = (num1,num2)=>{
 return num1 + num2
}
// console.log(addTwo(3,2))

// const addTow = (num1 , num2 ) => num1 + num2
 
// console.log(addTow(2,2));

// const addTow = (num1 , num2) => (num1 + num2)

const addTow = (num1 , num2) => ({name : "Nikhil"})

console.log(addTow(8,9));