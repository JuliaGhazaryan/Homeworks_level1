//Task 1	Declare 2 variables a and b....

let num1 = 14
let num2 = 5
alert(num1 + num2)
alert(num1 - num2)
alert(num1 * num2)
alert(num1 / num2)
alert(num1 % num2)

let num3 = 99
let num4 = 11
alert(num3 + num4)
alert(num3 - num4)
alert(num3 * num4)
alert(num3 / num4)
alert(num3 % num4)

let num5 = 81
let num6 = 16
alert(num5 + num6)
alert(num5 - num6)
alert(num5 * num6)
alert(num5 / num6)
alert(num5 % num6)

//Task 2.	Print your name and age in the following format: “My name is ____, I am ____ .”

let myName = 'Julia'
let myAge = 33
alert("My name is " + myName +", I am " + myAge + ".")

//Task 3.	Declare a variable with defined value. Print the last digit of the number. 

let a = 78756
alert(a % 10)

let b = -122
alert(b % 10)

let c = 8
alert(c % 10)

let d = 0
alert(d % 10)

// Task 4.	Check whether a given number is negative. Print “yes”, if it is negative, print “no” otherwise.


let num = 0
num < 0 ? alert("yes") : alert("no")

let num1 = -71
num1 < 0 ? alert("yes") : alert("no")

let num2 = 89
num2 < 0 ? alert("yes") : alert("no")

//Task 5.	Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.

let num1 = 3
let num2 = 14

if(num1%num2===0 || num2%num1===0) {
    alert("1")
} else {
    alert("0")
}


let num3 = 18
let num4 = 2

if(num3%num4===0 || num4%num3===0) {
    alert("1")
} else {
    alert("0")
}


let num5 = 7
let num6 = 21

if(num5%num6===0 || num6%num5===0) {
    alert("1")
} else {
    alert("0")
}


//Task 6.	Given any number between 1 and 12. Print the name of the respective month.

const monthName = +prompt()
 
    switch(monthName) {
        case 1 : {
        console.log("January")  
        break;  
        }
        case 2 : {
            console.log("February")  
            break; 
        } 
        case 3 : {
            console.log("March")  
            break; 
        } 
        case 4 : {
            console.log("April")  
            break; 
        } 
        case 5 : {
            console.log("May")  
            break; 
        } 
        case 6 : {
            console.log("June")  
            break; 
        } 
        case 7 : {
            console.log("July")  
            break; 
        } 
        case 8 : {
            console.log("August")  
            break; 
        } 
        case 9 : {
            console.log("September")  
            break; 
        } 
        case 10 : {
            console.log("October")  
            break; 
        } 
        case 11 : {
            console.log("November")  
            break; 
        } 
        default : {
            console.log("December")  
            
        } 
    }

    //Task 7.	Given three numbers. Find the maximum one.

let num1 = -4
let num2 = 6
let num3 = 0

if(num1>num2 && num1>num3) {
    alert(num1 + " is maximun")
}else if(num2>num1 && num2>num3){
    alert(num2 + " is maximun")
}else{
    alert(num3 + " is maximun")
}

let num4 = 1020
let num5 = 500
let num6 = -450

if(num4>num5 && num4>num6) {
    alert(num4 + " is maximun")
}else if(num5>num4 && num5>num6){
    alert(num5 + " is maximun")
}else{
    alert(num6 + " is maximun")
}

let num7 = 14
let num8 = 8
let num9 = 14

if(num7>num8 && num7>num9) {
    alert(num7 + " is maximun")
}else if(num8>num7 && num8>num9){
    alert(num8 + " is maximun")
}else{
    alert(num9 + " is maximun")
}