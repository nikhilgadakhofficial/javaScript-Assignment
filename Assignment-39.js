// Class Constructor and Static

class User {
    constructor(username,email,password){
        this.username =  username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai","nik@com","123")

console.log(chai.encryptPassword());
console.log(chai.changUserName());

// behind the scene

function Nmae(username,email,password){
    this.username =  username
    this.email = email
    this.password = password
}
Nmae.prototype.encryptPassword = function(){
      return `${this.password}abc`
}

Nmae.prototype.changUserName = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new Nmae("tea","gad@com","123")

console.log(tea.encryptPassword());
console.log(tea.changUserName());


// inheritance

class UserName {
    constructor(username){
        this.username = username
    }
    
    logMe(){
        console.log(`USERNME : ${this.username}`);
    }
}

class Teacher extends UserName {
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCoures(){
        console.log(`A New coures was addd by ${this.username}`);
    }
}

const chaiTae = new Teacher("Nikh","nik.com","124")

chaiTae.addCoures()

const newChai = new UserName("Gadakh")

newChai.logMe()

console.log(chaiTae === newChai);

console.log(chaiTae instanceof UserName);


// StaticProp

class UserTea {
    constructor(username){
        this.username = username
    }
    loMe(){
        console.log(`UserNmae : ${this.username}`);
    }
 static   createId(){
       return `123454`
    }
}

const nikhil = new UserTea("NIkhil")
// console.log(nikhil.createId());

