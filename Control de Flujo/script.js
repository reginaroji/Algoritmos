// Exercise #1

// Part 1

var dayNumber = parseInt(prompt("Ingresa un número de día de la semana: "));
var hourNumber = Number(prompt("Ingresa una hora: "));

function businessHours(dayNumber, hourNumber) {
    if ((dayNumber >= 1 && dayNumber <6) && (hourNumber >= 9 && hourNumber <= 18))
        return true;
    else
        return false;
    
}

alert(businessHours(dayNumber, hourNumber));



// Part 2

var janFirstDayNumber = parseInt(prompt("Ingresa el número de día del 1ero de enero: "));
var yearDayNumber = parseInt(prompt("Ingresa un número de día del año (1-365): "));

function getDayNumber(janFirstDayNumber, yearDayNumber) {
    if (janFirstDayNumber < 0 || janFirstDayNumber > 6) {
        return "Igresa un número entre 0 y 6 para los días de la semana";
    }

    if (yearDayNumber < 1 || yearDayNumber > 365) {
        return "Igresa un número entre 1 y 365 para los días del año";
    }

    let residuo = (yearDayNumber % 7) - 1;
    let dayOfWeek = janFirstDayNumber + residuo;
    if (dayOfWeek > 6) {
        dayOfWeek -= 7;
    }

    console.log(dayOfWeek);

    switch (dayOfWeek) {
        case 0:
            return "Es Domingo!";

        case 1:
            return "Es Lunes!";

        case 2:
            return "Es Martes!";

        case 3:
            return "Es Miércoles!";

        case 4:
            return "Es Jueves!";

        case 5:
            return "Es Viernes!!!!";

        case 6:
            return "Es Sábado!";

        default:
    }
}

alert(getDayNumber(janFirstDayNumber, yearDayNumber));

// Part 3

function businessHoursYearDay(yearDayNumber, hourNumber) {
    if (janFirstDayNumber < 0 || janFirstDayNumber > 6) {
        return "Igresa un número entre 0 y 6 para los días de la semana";
    }

    if (yearDayNumber < 1 || yearDayNumber > 365) {
        return "Igresa un número entre 1 y 365 para los días del año";
    }

    let residuo = (yearDayNumber % 7) - 1;
    let dayOfWeek = janFirstDayNumber + residuo;
    if (dayOfWeek > 6) {
        dayOfWeek -= 7;
    }

    return businessHours(dayOfWeek, hourNumber);
}

alert("El día " + yearDayNumber + " del año y a la hora " + hourNumber + " hrs ¿es laboral?: " + businessHoursYearDay(yearDayNumber, hourNumber));