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