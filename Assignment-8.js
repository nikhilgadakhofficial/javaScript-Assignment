// String in Js

const name = "Nikhil"
const age = 20

console.log(`My Name is ${name} And My Age is ${age} `); // This is Template String

const gameName = new String('Nikhil')

console.log((gameName[0]));
console.log(gameName.__proto__);


console.log((gameName.length));
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("h"));

const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(0,4)
console.log(anotherString);

const newStringOne = "    Nikhil    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://nikhil.com/nikhil%20gadakh"

console.log(url.replace('%20','-'));
console.log(url.includes('nikhil'));