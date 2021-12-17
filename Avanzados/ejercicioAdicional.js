/* Create a function that compares the 3 arrays and finds any common elements. Print out the common elements. */

var values1= ['Apple', 1, false];
var values2 = ['Fries', 2 ,true];
var values3 = ['Mars', 9, 'Apple'];

for (const value1 of values1) {
    for (const value2 of values2) {
        for (const value3 of values3) {
            if (value1 === value2 || value1 === value3 || value3 === value2) {
                console.log(value1);
            }
        }
        
    }
}