function businessHours(yearDayNumber, hourNumber) {
    if ((yearDayNumber >= 1 && yearDayNumber <6) && (hourNumber >= 9 && hourNumber <= 18))
        return true;
    else
        return false;
    
}

var date = new Date();
var yearDayNumber = date.getDay();
console.log(yearDayNumber);
var hourNumber = date.getHours();
console.log(hourNumber);

alert("El día " + yearDayNumber + " del año y a la hora " + hourNumber + " hrs ¿es laboral?: " + businessHours(yearDayNumber, hourNumber));