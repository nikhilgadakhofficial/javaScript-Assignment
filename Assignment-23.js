// forEach : For Array And Object
// Note : forEach not  return value 

const coding = ["js","ruby","java","python","Cpp"]

// Type of forEach Shwo

coding.forEach(function (i){
    console.log(i);
})

coding.forEach( (j)=>{
      console.log(j);
})

function printMe(i){
   console.log(i);
}

coding.forEach(printMe)

coding.forEach((i,index,arr)=>{
    console.log(i,index,arr);
})


const myCoding = [
    {
     name : "Js",
    age : 12,
    email : "nikhil@123"
    },
   {
    name : "Js",
    age : 12,
    email : "gadakh@123"
   }
]

myCoding.forEach( (i)=>{
    console.log(i.email);
})
   /*
const value = coding.forEach ((item)=>{
       console.log(item);
       return item
})
console.log(value);
*/

/*
 <script>
        const requestUrl = "https://newsapi.org/v2/everything?q=tesla&from=2024-06-01&sortBy=publishedAt&apiKey=cde8fc3f1b79416786ff599ddaed7ed0";
    const xhr = new XMLHttpRequest();
    xhr.open("GET", requestUrl);
    xhr.onreadystatechange = function () {
      console.log(xhr.readyState);
      if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText);
        console.log( typeof data);
        const arr = data.articles;
  
        arr.map( (nk,index)=>{
    

    const  {author,title,description,urlToImage,publishedAt,url} = nk

    console.log(title);

    const card = document.getElementById('1')
    card.innerHTML =` <img src=""/>
      <p></p>
      <h1>${title}</h1>
      <h1></h1>`
    

    

    

   
    
})
        
      }
    }
    xhr.send();
    </script>
*/