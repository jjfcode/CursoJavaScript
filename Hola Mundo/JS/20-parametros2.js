'use strict'

// Parametros REST y SPREAD

function listadoFrutas(fruta1, fruta2, ...restos_de_frutas){
    console.log('Fruta 1: ',fruta1);
    console.log('Fruta 2: ', fruta2);
    console.log(restos_de_frutas);
}

listadoFrutas('Naraja', 'Manzana', 'Sandia', 'Pera', 'Melon', 'coco');

var frustas = ['Naraja', 'Manzana'];
listadoFrutas(...frustas, 'Sandia', 'Pera', 'Melon', 'coco');