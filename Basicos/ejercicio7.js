/* Open a repl.it Javascript page and call it Algorithms Introduction Exercise 3.
We have 3 items and we know the price for each. However, we can only buy the two least expensive items.
Write an algorithm that takes in three user inputs and outputs the two smallest prices to the console. */

let num1 = parseInt(prompt("Ingrese el primer valor: "));
let num2 = parseInt(prompt("Ingrese el segundo valor: "));
let num3 = parseInt(prompt("Ingrese el tercer valor: "));

var max = Math.max(num1,num2,num3);

if(max == num1) {
    alert("Los precios más baratos son: " + num2 + " y " + num3);
}
else if(max == num2) {
    alert("Los precios más baratos son: " + num1 + " y " + num3);
}
else {
    alert("Los precios más baratos son: " + num1 + " y " + num2);
}