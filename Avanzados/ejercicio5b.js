/* Write a command that prints out all of the people in the list.
Write the command to remove "Dani" from the array.
Write the command to remove "Juan" from the array.
Write the command to add "Luis" to the front of the array.
Write the command to add your name to the end of the array.
Using a loop, iterate through this array and after console.log-ing "Maria", exit from the loop.
Write the command that gives the indexOf where "Maria" is located. */

var people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

console.log(people);
people.splice(1, 1);
console.log(people);
people.splice(2, 1);
console.log(people);
people.splice(1, 1);
people.unshift("Luis");
console.log(people);
people.push("Regina");
console.log(people);

for(const name of people) {
    if (name === "Maria") {
        console.log(name);
        console.log("Index = " + people.indexOf(name));
    }
}