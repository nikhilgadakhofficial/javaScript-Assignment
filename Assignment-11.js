// Array in Js
 
let array1 = [ 0, 1, 2, 3, 4 ,5 ]
let array2 = [ 2, "nikhil", true, ]
let array3 = ['Nikhil', 'Om', 'Ram']
console.log(array1);
console.log(array1[2]);
console.log(array2);
console.log(array3);

// Array Method

let myArray = [ 0, 1, 2, 3, 4, 5]

myArray.push(6) // insert the element in last
console.log(myArray);

myArray.pop() // delete the last  element 
console.log(myArray);

myArray.unshift(1) // insert the element in first
console.log(myArray);

myArray.shift() // delete the first element 
console.log(myArray);

console.log(myArray.includes(7)); // find 
console.log(myArray.indexOf(3)); // find the elenment in array 


const newArray = myArray.join() // convert the array to String 

console.log(myArray);
console.log(newArray);
console.log(typeof newArray);

// Slice , Splice 

console.log("A" , myArray);

const myn1 = myArray.slice(1,3)
console.log(myn1);
console.log("B" , myArray);

const myn2 = myArray.splice(1,3)
console.log("c",myArray);
console.log(myn2);


//
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["suprman", "flash", "batman"]

 // marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

//const allHeros = marvel_heros.concat(dc_heros) // Concat is connact the tow  array in one array
// console.log(allHeros);


const all_New_heros = [...marvel_heros, ...dc_heros] // This seconde Method of connact the Tow Array
// console.log(all_New_heros); 

const another_array = [1, 2, 3, [4, 5, 6,],7 ,[6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Nikhil"))

console.log(Array.from("Nikhil"))

console.log(Array.from({name : "nikhil"})); // intresting

let a = 100
let b = 200
let c = 300

console.log(Array.of(a,b,c));



