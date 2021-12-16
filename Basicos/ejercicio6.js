/*
Open a repl.it Javascript page and call it Algorithms Introduction Exercise 2.
Write an algorithm to find the largest among 5 different numbers entered by the user.
Print out the largest number to the console.
*/

let num1 = parseInt(prompt("Ingrese el primer valor: "));
let num2 = parseInt(prompt("Ingrese el segundo valor: "));
let num3 = parseInt(prompt("Ingrese el tercer valor: "));
let num4 = parseInt(prompt("Ingrese el cuarto valor: "));
let num5 = parseInt(prompt("Ingrese el quinto valor: "));

var max = Math.max(num1,num2,num3,num4,num5);
console.log(max);