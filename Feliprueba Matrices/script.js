var carreritas = ["Lucía", "Roberto", "María", "Jesús", "Andrea", "José"];
var contador = 0;

function imprimir() {
    contador++;
    console.log("Ronda " + contador);
    carreritas.forEach((element, index) => {
        console.log("Posición " + (index+1) + ": " + element);
    });
}

imprimir();

var aux = carreritas[4];
carreritas[4] = carreritas[3];
carreritas[3] = carreritas[2];
carreritas[2] = aux;

imprimir();

carreritas.pop();

imprimir();

carreritas.shift();
carreritas.unshift("Armando");
carreritas.unshift("Fernanda");
carreritas.unshift("Cristóbal");
carreritas.unshift("Lucía");

imprimir();

carreritas.unshift("Federico");

imprimir();