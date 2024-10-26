// filter 

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNumsOne = myNums.filter( (num) => num > 4) // 

const newNumTwo = myNums.filter( (num)=>{  
    return num > 6
})

console.log(newNumsOne);
 console.log(newNumTwo);

//********************************** 

const newNums = []

myNums.forEach( (num)=>{
    if (num > 5) {
        newNums.push(num)
    }
})
// console.log(newNums);

// ****************************

const book = [
    {
        title : "Book One ",
        genre : "Fiction",
        publish : 1981,
        edition : 2004
    },
    {
        title : "Book Two ",
        genre : "Non-Fiction",
        publish : 1992,
        edition : 2014
    },
    {
        title : "Book Three ",
        genre : "History",
        publish : 1999,
        edition : 2007
    },
    {
        title : "Book Foure ",
        genre : "Non-Fiction",
        publish : 1989,
        edition : 2010
    },
    {
        title : "Book Five",
        genre : "Science",
        publish : 2009,
        edition : 2014
    },
    {
        title : "Book Six",
        genre : "Fiction",
        publish : 1997,
        edition : 2010
    }
]

// const userBook = book.filter( (bk) => bk.genre === "Fiction")

// const userBook = book.filter( (bk)=>{
   // return bk.publish >= 1990
// })

const userBook = book.filter( (bk)=>{
    return bk.genre ===  "Fiction" && bk.edition >= 2010 
})

console.log(userBook);