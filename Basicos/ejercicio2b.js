/**
* Exercise #2
* Create a function that takes in one number
* and checks if it is divisible by 4 or divisible by 9.
* Print out to the console true if a number
* if divisible by 4 or 9, and false if a
* number is not divisible by either number.
*/
function div(){
    var numero =parseInt(prompt("Dime un numero: "));
    if((numero%4)==0)
    {
        console.log("Divisible entre 4");
    }
    else if((numero%9)==0)
    {
        console.log("Divisible entre 9");
    }
    else
    {
        console.log("Falso");
    }
}
div();