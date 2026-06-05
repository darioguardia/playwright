// const channelName = "Example Text"
// //channelName = "New Text" -> throws error 
// console.log(channelName);

// let url = "www.google.com"
// url = "www.google.es"
// console.log(url) 

//Data Types 
let title = "Youtube Channel"
console.log(title);

let age = 31 
console.log(age)

let isLogged = false; 
console.log(isLogged)

let users = ["Fata", "Google"]
console.log(users)
console.log(users[0])
console.log(users[1])

//Object 
const userDetails = {
    username : "rimuu",
    password : "test123",
    age : 31,
    email : "rimuu48@gmail.com"
}

console.log(userDetails)
console.log(userDetails.email)

//functions 

function sayHello(){
    console.log("Hello")
} 

sayHello() //function call

//arrow function

const sayHello2 = () =>{
    console.log("Hello 2")
}

sayHello2() 

//parameters

const sayHi = (nameValue, age) =>{
    console.log(`Hi ${nameValue}, your age is ${age}`)
}

sayHi("Dario", 31)

const getAge = () =>{
    const age = 31
    return age
}
getAge() //doesnt show anything because it needs to be asigned
const ageVal = getAge()
console.log(ageVal) 

//ARITHMETICS OPERATORS

console.log(2+5)
console.log(3-2)
console.log(10/3)
console.log(5*7)
console.log(10%2)


//COMPARISSON OPERATORS
console.log(3===3) //compares 2 numbers and if they are equals drops true
console.log(3!==5) // same but if they are not equals
console.log(86>72) //true
console.log(86<72) //false
console.log(86<=72) //false
console.log(42>=8) //true
console.log("test"==="test") 

//logical operators
console.log(3===3 && 4===4)
console.log(3===5 || 86>5)
console.log(!false)

//conditioners

if(3===4){
    console.log("Numbers are equal")
}else{
    console.log("Numbers are not equal")
}

const a = 3
const b = 4

if(a==b){
     console.log("Numbers are equal")
}else if(a>b){
     console.log("Number "+a+" is greater than "+b)
}else{
    console.log("Number "+b+" is greater than "+a)
}

//LOOPS
for(let i=0;i<=10;i++){
    console.log(i)
}

let usersData = ["Fata","Dario","Picu","Leito",20,true]

for (const user of usersData) {
   console.log(user) 
}

//ASYNC AWAIT 

async function loadDataHotel () {
    await fetch("www.googlel.com")
}

//CLASSES

class LoginPage{

    // constructor(){
    //     this.nameValue = "Dario"
    //     this.emailValue = "rimuu48@gmail.com"
    // }

     constructor(company){
        this.nameValue = "Dario"
        this.emailValue = "rimuu48@gmail.com"
        this.company = company
    }

    //METHODES
    login(){
        console.log("Login Called")
        console.log("Company name: "+this.company)

    }

    sayHello(){
        console.log("HELLO")
    }
}

//OBJECT

const loginPageObject = new LoginPage()

loginPageObject.sayHello()
console.log(loginPageObject.nameValue)
console.log(loginPageObject.emailValue)
const loginPageObject2 = new LoginPage("motivus")
console.log(loginPageObject2.company)
loginPageObject2.login()


//IMPORT EXPORT
//export default class PracticeImportExport { //call it without {}
export class PracticeImportExport {

    learn(){
        console.log("Javascript Practice")
    }
}

