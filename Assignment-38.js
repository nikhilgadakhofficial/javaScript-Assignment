// Call and This 

function setUserName(uername){
     this.uername = uername
}

function setCreatUser(uername,email,password){
       setUserName.call(this,uername)
       
       this.email = email
       this.password = password
}

const chai = new setCreatUser("chai","cha@.com","123")
console.log(chai);

// Defind : call is 