'use strict'

// pruebas con let y var

var numero = 40;
console.log(numero); // valor 40

if(true){
    var numero = 50; 
    console.log(numero); // valor 50
}

console.log(numero); // valor 50

// prueba con Let
var texto = "Curso JS victorroblesweb.es";
console.log(texto); // valor Curso JS victorroblesweb.es

if(true){
    let texto = "Curso Laravel 5 victorroblesweb.es";
    console.log(texto); // valor laravel 5
}

console.log(texto); // valor Curso JS victorroblesweb.es