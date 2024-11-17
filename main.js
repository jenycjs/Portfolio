"use strict"
// alert("Hello, world!");
 
/*
ES5 : older syntax
ES6: introduced in 2017, recommended syntax
*/
 
let firstName = "Long"; //string
console.log(firstName);
firstName = "Richard";
 
const LAST_NAME = "Hoang";
var middleName = "Patrick"; // ES5
 
console.log("Hello, " + firstName + " " + middleName + " " + LAST_NAME); // ES5 - style string concatenation
 
// ES5 function style
function sayHelloOld(name) {
    console.log("Hello, " + name + "!");
}
 
// ES6 arrow function (arrow syntax)
const sayHello = (name) => {
    console.log(`Hello, ${name}!`);
}
 
sayHello("Kyle");
sayHello("Stan");
sayHello("Konny");
sayHello("Eric");
 
let age = 25; // Number
let alive = true; // Boolean: true/false
let interest = ["birding", "crossword", "coffee", "weightlifting", "travel"];
 
console.log(age);
console.log(alive);
console.log(interest);
 
// DOM API
const interestsEl = document.getElementById("interests");
interest.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item;
    interestsEl.appendChild(li);
});
 
// Date API
const fYear = document.getElementById("footerYear");
const d = new Date();
fYear.textContent = d.getFullYear();
 
// Corrected function with proper syntax for template literals and `console.log` method
const sum = (a, b) => {
    const total = a + b;
    console.log(`TOTAL: ${total}`);
}
 
let x = 100;
let y = 110;
const total = sum(x,y);
console.log (`TOTAL: ${total}`);
 
let fruit ="apple";
const changeValue = () => {
    fruit = "orange";
    let veg = "cucumber";
}
changeValue();
//veg = "zuke"; // strict mode prevents this
console.log(veg);
console.log(fruit);

// conditional statements (if-else)
const greeting = () => {
if (d.getHours() <= 11) {
    console.log('Good morning');
} else if (d.getHours() < 6) {
    console.log('Good afternoon');
}else {
    console.log('Good evening');
}}

const btn = document.getElementById("btn");
btn.addEventListener{"click", ()=>{
    console.log{'clicked'};
}}