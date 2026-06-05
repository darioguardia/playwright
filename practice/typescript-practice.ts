//TO RUN WE NEED TO TYPE IN TERMINAL tsc filename.ts, it will generate a js file that we can run. We have to do this everytime we make a change on this file
//WE CAN ALSO RUN tsc filename.ts && node filename.js, it will run both comands
const nameValue:string = "Motivus"
console.log(nameValue)

let url:string = "www.google.com"
console.log(url)

//DATA TYPES

let course: string = "Motivus"
console.log(course)

let nameVal: string = "Typescript"
let description: string = nameVal + " is working"
console.log(nameVal)
console.log(description)

let count:number = 9
console.log(count)

let isVisible:boolean = true
console.log(isVisible)

let num1: any = 20
console.log(num1)
num1="abc"
console.log(num1)
num1=true
console.log(num1)

let users: string[] = ["Motivus","Fata"]
console.log(users)
console.log(users[0])

let marks: any[] = [45,"Motivus",false]
console.log(marks)

let numArray: Array<Number> = [4,3,2,6,1]
console.log(numArray)

//OBJECTS

let userDetails: {username:string, password:string, age:number, isRegistered:boolean} = {username:"fata",password:"p4ssword",age:31,isRegistered:true}
console.log(userDetails)
console.log(userDetails.username)

//FUNCTIONS

function sayHello(){
    console.log("Hello")
}

sayHello()

const sayHello2 = ()=>{
    console.log("Hello 2")
}
sayHello2()

function sayHello3(): void{
    console.log("Hello Void")
}
sayHello3()

const sayHello4 = (): void=>{
    console.log("Hello Void2")
}
sayHello4()

// FUNCTION WITH PARAMETERS

const add = (num1:number, num2:number): void=>{
    console.log(num1+num2)
}

add(3,4)

const add2 = (num1:number, num2:number): number=>{
    return num1+num2
}

const result:number = add2(5,4)
console.log(result)

function greet(name?:string){ //optional parameters -> ?
    console.log("Hi, your name is: "+name)
}

greet("Dario")
greet()

//ARITHMETIC OPERATORS

console.log(2+5)
console.log(3-2)
console.log(10/3)
console.log(5*7)
console.log(10%2)


//COMPARISSON OPERATORS
let a:number = 3
let b: number = 7
let c: string = "test"
let d: string = "test"
console.log(a===b) //compares 2 numbers and if they are equals drops true
console.log(a!==b) // same but if they are not equals
console.log(a>b) //false
console.log(a<b) //true
console.log(a<=b) //true
console.log(a>=b) //false
console.log(c===d) 

//logical operators
let age:number = 31
let isLogged:boolean= true

console.log(age>=18 && isLogged)
console.log(age>=32 || isLogged)
console.log(!isLogged)

//conditionals

if(age>= 18){
    console.log("is Adult")
}else{
    console.log("is Minor")
}

//loops

for(let i = 0; i <=10; i++){
    console.log(i)
}

let userNames: string[] = ["Dario","Ale", "Jose","Ana"]

for (const userI of userNames) {
    console.log(userI)
}

//async 
async function loadData(): Promise<void>{
    await fetch("www.google.com")
}

//INTERFACE

interface User {
    username:string,
    password:string,
    age:number
}

let userDetailsInterface: User = {
    username: "darioguardia",
    password: "p4ssword",
    age:31
}

console.log("Inteface username: "+userDetailsInterface.username)

//TYPE

type UserT = {
    username:string,
    password:string,
    age:number
}

let userDetailsType: UserT = {
    username: "dguardia",
    password: "p4ssword",
    age: 31
}

console.log("Type username: "+userDetailsType.username) 


type Status = "Pass" | "fail" | "Skip"

let testStatus:Status = "Skip" //CASE SENSITIVE  

// CLASSES

class LoginPage { 
    nameValue:string 
    company:string 

    constructor(nameValue:string){
        console.log("Inside constructor")
        this.nameValue = nameValue
        this.company = "motivus"
    }

    login(): void{
        console.log("Log In -> LoginPage Class")
    } 

    testExport():void{
        console.log("Test from export OK")
    }
}

const loginPageObject = new LoginPage("darioguardia")
loginPageObject.login()
console.log(loginPageObject.nameValue)
console.log(loginPageObject.company)

//IMPORT EXPORT

export class TestPage{
     testExport():void{
        console.log("Test from export OK")
    }
}

 
