// Exercise #1

// Part 1
// There are three people waiting for the bank. Their names, in order, are Sofia, David, and Juan. Create an array that has these three names in order.

var names = ["Sofia", "David", "Juan"];

console.log(names);

// Part 2
// Two more people get added to the back of the line - Sara and Augustin. The first person in line is called to the teller. What does the queue look like?

names.push("Sara");
names.push("Daniel");
names.shift();

console.log(names);

// Part 3
// It turns out David was saving a spot for his friend Renata. She shows up and goes behind him in the line. One more person (Elena) shows up and goes to the end of the line. What does the queue look like?

names.splice(1, 0, "Renata");
names.push("Elena");

console.log(names);

console.log("\n");
console.log("\n");

// Exercise #2

// Write a JavaScript program to construct the following pattern, using a nested for loop.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *

for (let i = 1; i <= 5; i++) {
    for (let j = 0; j < i; j++) {
        console.log("* ");
    }
    console.log("\n");
}

console.log("\n");
console.log("\n");

// Exercise #3
// Write while loops to do the following:

// Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time, as long as xValue remains positive.

var xValue = 5;

while(xValue >= 0) {
    console.log(xValue);
    xValue -= 0.5;
}

console.log("\n");
console.log("\n");

// Print all the odd numbers between 1 - 100.

var num = 1;

while(num <= 100) {
    console.log(num);
    num += 2;
}

console.log("\n");
console.log("\n"); 

// Write a method with a while loop to print 1 through n in square brackets. 
// For example, if n = 6 print [1] [2] [3] [4] [5] [6]

var n = 12;
var count = 1;

while(count <= n) {
    console.log("[" + count + "] ");
    count++;
}

// Write a method with a while loop that computes the sum of first n positive integers: 
// sum = 1 + 2 + 3 + … + n
// Examples:
// n = 5 sum = 15
// n = 19 sum = 190

n = 19;
count = 0;
var sum = 0

while(count <= n) {
    sum += count;
    count++;
}
console.log("The sum of first n positive numbers beign n = " + n + " is:");
console.log(sum);