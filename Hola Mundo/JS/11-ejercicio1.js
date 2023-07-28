'use strict'

/*
Programa que pida 2 numeros y que nos diga cual es mayor, el menor y si son iguales
Plus: si los numeros no son numeros 0 son menores o iguales a cero, nos los vuelva a pedir
*/

var numero1 = parseInt (prompt('Introduce el primer numero', 0));
var numero2 = parseInt (prompt('Introduce el segundo numero', 0));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt (prompt('Introduce el primer numero', 0));
    numero2 = parseInt (prompt('Introduce el segundo numero', 0));
}

if(numero1 == numero2){
    alert('Los numeros son iguales');
}else if(numero1 > numero2){
    alert('El numero mayor es: ' + numero1);
    alert('El numero menor es: ' + numero2);
}else if(numero2 > numero1){
    alert('El numero mayor es: ' + numero2);
    alert('El numero menor es: ' + numero1);
}else{
    alert("Introduce Numeros Correctos")
}

