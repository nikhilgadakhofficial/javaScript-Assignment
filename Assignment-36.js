// JavaScript and Classes

// OOP

// Object - collection pf peoperties and methode
// ex : toLowerCase

// why use OOP

// part of OOP

// Object literal

// Constructor function
// prototypes
// Classes
// Instancees (New,this)

// 4 pillars

const user = {
    username : "Nikhil",
    loginCount : 8,
    singedIn : true,

    getUserDetails : function (){
       // console.log("Go To user");
       //console.log(`UserName : ${this.username}`);
       console.log(this);
    }
}
console.log(user.username);
 console.log(user.getUserDetails());
//console.log(this);



// Constructor function

function User(userName, loginCount, age){
      this.userName = userName
      this.loginCount = loginCount
      this.age = age

      return this
}
const userOne = new User("Nikhil",2,32)
console.log(userOne);
const userTwo = new User("om",3,4)
console.log(userTwo);