// Datatype conversion confusion 

let score = "33"

console.log(score);
console.log(typeof score);

 let valueNumbaer = Number(score);

console.log(typeof valueNumbaer);
console.log(valueNumbaer);

// "33" => 33
// "33asd"n=> NaN = Not a Number
// ture => 1 ; false => 0

let isLoggedIn = 1

console.log(isLoggedIn);

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);

//1 => ture ; 0 => false
// "" => false 
// "Nikhil" => true

let name = 33

console.log(name);
console.log(typeof name);

let stringName = String(name)

console.log(stringName);
console.log(typeof stringName)

// 33 => string 
// 