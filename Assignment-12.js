// Objects in Js

// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
       name : "Nikhil",
       "full name" : "Nikhil Gadakh ",
       [mySym] : "mykey1", // Symbol declare in object // Imp 
       age : 20,
       location : "Sonai",
       email : "nikhil123@gmail.com",
       isLoggedIn : false,
       lastLogunDay : ["Sunday", "Monday"]
}
// Get the Array 
console.log(JsUser);
console.log(JsUser.email);
console.log(JsUser["email","age"]);
console.log(JsUser["full name"]);
console.log( JsUser[mySym]);

JsUser.email = "gadakh123@gmail,com"

console.log(JsUser.email);

// Object.freeze(JsUser) This the freeze funcaction is  not canghe in object

console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello Js user");
}


JsUser.greetingTow = function(){
    console.log(`Hello Js user ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTow());


// singleton 


const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Nikhil"
tinderUser.isLoggrdIn = false

// console.log(tinderUser);

const regularUser = {
    email : "nikhil@12gmail.com",
    fullname :{
        userFullname : {
            firstName : "Nikhil",
            lastName : "Gadakh"
        }
    }
}

console.log(regularUser.fullname.userFullname.firstName);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" } 
const obj3 = { 5: "e", 6: "f"}

// const obj4 = Object.assign({} , obj1, obj2 , obj3)

const obj4 = {...obj1,...obj2,...obj3}

console.log(obj4);

const users = [
    {
        id : "1",
        name : "Nikhil"
    },
    {
        id : 2,
        name : "Om"
    }
]

console.log(users[1].name)

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// Object De-structure And JSON In React 

const course = {
    coursename : "Js In Hindhi",
    price : 999,
    time : "10 pm  To 11 pm"
}


const {coursename} = course // De-structure

console.log(coursename);

// JSON 

/*
 {
    "name" : "Nikhil",
    "age" : 20
 } 
 */
[
    {},
    {},
    {}
]
