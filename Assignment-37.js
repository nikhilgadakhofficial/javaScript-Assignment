
// new


function multiple(num){
     return num*5
}
console.log(multiple(5));
console.log(multiple.prototype);

function createUser(uername,score){
    this.uername = uername
    this.score = score
}


createUser.prototype.incrment = function (){
this.score++
console.log(`score is ++ ${this.score}`);
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const chai = new createUser("chai",25)
const tea = new createUser("tea",45)

chai.printMe()
chai.incrment()

// prototype

let myName = "Nikhil     "

console.log(myName.length);

let myHeros = ["Nikhil","OM"]

let heroPower = {
     thor : "hummer",
     spidermant : "slong",

     getspiiderPower : function(){
        console.log(`Spidy power is : ${this.spidermant}`);
     }
}

Object.prototype.nikhil = function(){
    console.log(`Hii Nikhil`);
}

Array.prototype.hyynikhil = function(){
    console.log(`Hii NK`);
}
heroPower.nikhil()

myHeros.nikhil()

myHeros.hyynikhil()


// inhertance

const User = {
    name : "Nikhikll"
}
const Teachar = {
    isAvailabel : true
}

const TeachingSipport = {
    isAvailabel : true
}

const TSA ={
    maeAssinememnt : "Js assigment",
    fullTime : true,
    __proto__ : TeachingSipport
}

Teachar.__proto__ = User
 
// modern syntar
Object.setPrototypeOf(TeachingSipport,Teachar)


let name = "Nikhil    "
String.prototype.trueLength = function (){
    console.log(`${this}`);
    console.log(`True Length Is : ${this.trim().length}`);
}
name.trueLength()