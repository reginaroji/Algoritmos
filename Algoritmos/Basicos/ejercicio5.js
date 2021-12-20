/*
1. Write a program where a user enters the number of tasks they have completed.
The program returns one of the following labels to the console:
**Failed**
**Insufficient**
**Good**
**Excellent**
**Error**
based on the conditions:
Failed if they scored 6 or less
Insufficient if they scored > 6 but less than 9 (9 included)
Good if they scored > 9 but less than 14 (14 included)
Excellent if they scored 15
Error if participants enter a negative number or a number outside the
range supported (outside 0 - 15) */
function tasks(numberOfTasks) {
    if(numberOfTasks <= 6 && numberOfTasks > 0)
    console.log("**Failed**");
    else if(numberOfTasks > 6 && numberOfTasks <= 9)
    console.log("**Insufficient**");
    else if(numberOfTasks > 9 && numberOfTasks <= 14)
    console.log("**Good**");
    else if(numberOfTasks === 15)
    console.log("**Excellent**");
    
    else
    console.log("**Error**");
    }
    tasks(1);
    tasks(7);
    tasks(13);
    tasks(15);
    tasks(-2);
    tasks(21);