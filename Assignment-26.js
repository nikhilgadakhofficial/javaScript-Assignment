// reduce

const arr = [1,2,3]

const myTotal = arr.reduce( function (acc , curVal){
       console.log(`acc : ${acc} and curVal : ${curVal}`);
       return acc + curVal
},0)
console.log(myTotal);

const sam = arr.reduce((acc,currVal)=> acc + currVal,0 )

console.log(sam);

const shoppingCart = [
    {
        itemName : " JS Coures",
        price : 1000
    },
    {
        itemName : " Python Coures",
        price : 10000
    },
    {
        itemName : " Java Coures",
        price : 2000
    }
]

const myTotalCard = shoppingCart.reduce( (acc,item)=> acc + item.price,0)

console.log(myTotalCard);