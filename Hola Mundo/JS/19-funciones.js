'use strict'

// Funciones
// Una funcion es una agrupacion reutilizable de un conjunto de instrucciones

// Defino la funcion
function calculadora(numero1, numero2){
    //conjunto de instrucciones a ejecutar
    console.log('Suma: ' + (numero1+numero2));
    console.log('Resta: ' + (numero1-numero2));
    console.log('Multiplicacion: ' + (numero1*numero2));
    console.log('Division: ' + (numero1/numero2));
    console.log("**************************************");

    // return "Hola soy la calculadora!!";
}

// Invocar o llamar a la funcion
// calculadora(12, 8);
// calculadora(98, 2);

for(var i = 1; i <= 10; i++){
    console.log(i);
    calculadora(i, 2);
}