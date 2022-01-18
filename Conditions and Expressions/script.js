// Exercise #1
// You have a list of names: var names = ["Maria", "Antony", "Joy", "Juan"]

// Part 1
// Write a function to insert a name to the end of the list. Add your own name to the end of the list.

var names = ["Maria", "Antony", "Joy", "Juan"];

const addName = newName => names.push(newName);

addName("Regina");
console.log(names);

// Part 2
// Write a function that takes in a name and checks if the list has that name. It should return back a boolean - true/false.

const findName = nameToFfind => names.includes(nameToFfind);

console.log(findName("Joy"));

// Part 3
// Write a function that takes in a list of names. This function should compare the list taken into the names list you currently have. The function should pass back an array with the names that are in both lists.

var array = ["Joy", "Jorge", "Maria", "Pepe", "Juan"];
var newArray = [];

function coincidence(array) {
    names.forEach(elementNames => {
        array.forEach(elementArray => {
            if (elementNames == elementArray)
                newArray.push(elementArray);
        });
    });
}

coincidence(array);
console.log(newArray);

// Part 4
// Write a function that takes in a list of names and returns a list of Integers with the length of the names in the same order as received. Hint use the push function

var lengths = [];

function whatsTheLength(names) {
    names.forEach(element => {
        lengths.push(element.length);
    })
}

whatsTheLength(names);
console.log(lengths);

console.log("\n");
console.log("\n");

// Exercise #2
// What do the following expressions evaluate to?

console.log(false || (true && false));
console.log(true || (11 + 12));
console.log((31 + 22) || true);
console.log(true && (1 + 7));
console.log(false && (3 + 4));
console.log((1 + 2) && true);
console.log((32 * 4) >= 129);
console.log(false !== !true);
console.log(true === 4);
console.log(false === (847 === '847'));
console.log(false === (887 == '887'));
console.log((!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false);

console.log("\n");
console.log("\n");

// Exercise #3
// Write a function that logs whether a number is between 0 and 25 (inclusive), between 26 and 100 (inclusive), greater than 100, or less than 0.

// numberRange(25);   // '25 is between 0 and 25'
// numberRange(75);   // '75 is between 26 and 100'
// numberRange(125);  // '125 is greater than 100'
// numberRange(-25);  // '-25 is less than 0'

function numberRange(num) {
    if (num >= 0 && num <= 25)
        console.log(num + " is between 0 and 25");
    else if (num >= 26 && num <= 100)
        console.log(num + " is between 26 and 100");
    else if (num > 100)
        console.log(num + " is greater than 100");
    else
        console.log(num + " is less than 0");
}

numberRange(25);   // '25 is between 0 and 25'
numberRange(75);   // '75 is between 26 and 100'
numberRange(125);  // '125 is greater than 100'
numberRange(-25);  // '-25 is less than 0'

console.log("\n");
console.log("\n");

// Additional Exercises
// What is shown on the console when f is console.log'd?

var a;
var b = null;
var c = undefined;
var d = 4;
var e = 'five';
var f = a || b || c || d || e;

console.log(f);