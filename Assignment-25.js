// map

const myNumber = [1,2,3,4,5,6,7,8,9,10]

const numTotal = myNumber.map( (num)=> num +10)

console.log(numTotal);
/*
const a = []

myNumber.forEach((num)=>{
   num +10
   a.push(num)
})
console.log(a);
*/

const newNums = myNumber.map((num)=> num * 10).map((num)=> num + 1).filter((num)=> num > 40) ;

console.log(newNums);

