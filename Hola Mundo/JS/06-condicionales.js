'use strict'

// Condicional IF
// Si a es igual a B entonces haz algo


// var edad1 = 30;
// var edad2 = 12;

// // Si pasa esto
// if(edad1 > edad2){
//     //Ejecuta esto
//     console.log("Edad1 es mayor que edad2");
// }else{
//     console.log("La edad1 es inferior");
// }

var edad = 69;
var nombre = 'David Suarez';

/*
// Operadores relacionales
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ++
    Distinto !=
*/

if(edad >= 18){
    // Es mayor de edad
    console.log(nombre+" tiene "+edad+" anos, es mayor de edad");

    if(edad <= 33){
        console.log('Todavia eres milenial')
    }else if(edad >= 70){
        console.log('Eres anciano');
    }else{
        console.log('Ya no eres milenial')
    }
}else{
    console.log(nombre+" tiene "+edad+" anos, es menor de edad");
}