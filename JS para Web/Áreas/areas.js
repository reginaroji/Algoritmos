function triangulo(){
    var base = 6;
    var altura = 9;
    var area = base * altura / 2;
    alert ("El área del triángulo es: " + area);
}

triangulo();

function circulo(radio, pi, area){
    var radio = 5;
    var pi = 3.1416;
    var area = radio * radio * pi;
    console.log ("El área del círculo es: " + area);
}

circulo();

function rectangulo(base, altura, area){
    var area = base * altura;
    alert ("El área del rectángulo es: " + area);
}

rectangulo(10,3);