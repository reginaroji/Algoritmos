
// Comentario de una línea
// /* Comentario
// multilínea */

// alert ("Estoy viva!");

// console.log("Éste es un mensaje para la consola");

// var nombre = "Regina";
// var apellidos = "Rojí García";
// var edad = 24;

// console.log(nombre, apellidos, edad);

// alert("Mi nombre es " + nombre);

// console.log("Mis apellidos son " + apellidos);

// alert("Mi nombre es " + nombre + ", mis apellidos son " + apellidos + ", mi edad es " + edad);

// // Otro ejemplo de cómo mostrar variables en consola

// var numero1 = 5;
// var numero2 = 7;
// var resultado = numero1 + numero2;
// console.log("El resultado de la suma es: " +resultado);

// // Sintaxis básica de una función

// function nombreFuncion (parametros) {
//     instrucciones;
// }


// Declaración de función

// function saludar() {
//     alert("Hola a todos!");
// }

// saludar();


// // Expresión de función (anónima)

// var cantar = function() {
//     alert("A mí me gusta cantar");
// }

// cantar();


// // Función sin parámetros

// function sumar () {
//     var numero1 = 5;
//     var numero2 = 7;
//     var suma = numero1 + numero2;
//     alert("La suma de la funcion sin parámetros es: " + suma);
// }

// sumar();

// // Función con parámetros

// function restar (num1, num2) {
//     var resta = num1 - num2;
//     alert("La resta de la funcion sin parámetros es: " + resta);
// }

// restar(2, 4);

// // Otra función con parámetros

// function cuadrado (cuadrado) {
//     var resCuadrado = cuadrado * cuadrado;
//     alert("El cuadrado del número es: " + resCuadrado);
// }

// cuadrado(4);



// function prompter() {
//     var respuesta = prompt("Buenos días ¿Cuál es tu nombre? ");
//     alert("Es un gusto saludarte " + respuesta);
// }

// prompter();

// function areaCuadrado() {
//     var datoIngresado = prompt("Ingresa un número ");
//     var resultado = datoIngresado * datoIngresado;
//     alert("El resultado es: " + resultado + ", el dato ingresado fue: " + datoIngresado);
// }

// areaCuadrado();

function confirmacion() {
    var pregunta = confirm("Deseas visitar Google.com y buscar fotos de perritos?");

    if (pregunta) {
        alert("Te enviaré rapidamente");
        window.location = "https://www.google.com/search?q=perritos&sxsrf=AOaemvLP1AAswe95wPFflOltEJGjNso2_w:1641842461142&source=lnms&tbm=isch&sa=X&sqi=2&ved=2ahUKEwiqorHl86f1AhVCG6YKHTq6BbMQ_AUoAXoECAIQAw";
    }
    else {
        alert("No hay problema, nos vemos luego");
    }
}

//Get element by id

function cambiarColor(nuevoColor) {
    console.log("si");
    var elem = document.getElementById("parrafo");
    elem.style.color = nuevoColor;
}

function Accion (Tipo){
    var elem = document.getElementById ("DivBotones");
    if (Tipo == "Ocultar")
        elem.style.display = 'none';
    else
        elem.style.display = '';
}
