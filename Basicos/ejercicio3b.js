/**
* Exercise 2:
* We want to compare two strings and check if
* they are the same - case insensitive.
* Return a boolean - true if the two strings are
* the same, and false if they are not
*/
let str1 = (prompt("Ingrese el primer valor ")).toLowerCase();
let str2 = (prompt("Ingrese el segundo valor ")).toLowerCase();

function checkTwoStringsSame(str1, str2){
    if(str1 === str2){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
checkTwoStringsSame(str1, str2);

