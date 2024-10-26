// for of : for of loop is use to array 

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const i of arr) {
    console.log(i);
}

const greetings = "Hello World"

for (const i of greetings) {
      console.log(`Each char is ${i}`);    
}

// maps 

const map = new Map()

map.set('IN','India')
map.set('USA','United States of America')
map.set('Fr','France')

console.log(map);

for (const [key,value] of map ) {
    console.log(key,':-',value);
}

/*
const myObject = {
    game1 : "NFS",
    game2 : "OSKA"
}

for (const [key,value] of myObject) {
    console.log(key,':-',value);
}
*/

// for in : for in loop is use to Object

const myObj = {
    js : "javascript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift"
}

for (const key in myObj) {
     console.log(`${key} Shortcut is : ${myObj[key]}`);
}

const programing = ["js","rb","cpp","java"]

for (const key in programing) {
   console.log(programing[key]);
}