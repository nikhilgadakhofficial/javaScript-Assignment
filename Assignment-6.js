 // JS Operators

/*
Arithmetic operators (+, -, *, /, % )
Assignment operators (=, +=, -=, *=, /=)
Increment & Decrement operators
Comparison operators (<, >, <=, >=, ==, !=)
Logical operators (&& (logical AND), || (logical OR), ! (logical NOT))
Typeof operator
*/

// Arithmetic operators (+, -, *, /, % )
let a =20 
let b = 20
let sam1 = a + b
console.log("sam1 is " + sam1); // output is 40
let sam2 = a - b
console.log("sam2 is " + sam2 ); // output is 0
let sam3 = a * b
console.log("sam3 is " + sam3); // output is 
let sam4 = a / b
console.log("sam4 is " + sam4); // output is 
let sam5 = a % b 
console.log("sam5 is " + sam5); // output is 

// Assignment operators (=, +=, -=, *=, /=)

let num1 = 50

console.log(num1);

num1 +=  10
/*
num1 -= 50
num1 *= 5
num1 /= 2
num1 %= 10
*/
console.log(num1);

// Increment & Decrement Operators

// Increment operators

//  1 Post-Increment

let num = 21;
      let result = num++;
      console.log(result);
      console.log(num);

      // Output 21 
      // output 22

//  2 pre-Increment

 /*
 let num = 21;
      let result = ++num;
      console.log(result);
      console.log(num);
      */
     // Output 22
      // output 22


//  Decrement operators
//  1 Post-Decrement
let num2 = 21;
      let result1 = num2--;
      console.log(result1);
      console.log(num2);

      // output 21
      // output 20

//  2 pre-Decrement

/* let num2 = 21;
let result1 = --num2;
console.log(result1);
console.log(num2);
*/


// output 20
// output 20


// Comparison operators (<, >, <=, >=, ==, !=)

let x = 10;
let y = 10;
/*
console.log(x>y);
console.log(x<y);
console.log(x>=y);
console.log(x<=y);
console.log(x==y);
*/

console.log(null == 1);
console.log(null > 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined >= 0);

// ===
console.log("2"=== 2);

console.log(x!=y);

//Logical operators (&& (logical AND), || (logical OR), ! (logical NOT))


//&& (logical AND) This operator returns true if both operands are true, otherwise it returns false.

let res = 5 > 3 && 4 > 2;

console.log(res)


// || (logical OR) This operator returns true if at least one of the condition is true, otherwise it returns false.

let res2 = 5 == 5 || 2 == 4

console.log(res2)

// ! (logical NOT) If the operand is true, it returns false, and if the operand is false, it returns true.
 


console.log(8 != 8 );

