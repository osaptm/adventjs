'use strict';

function contarOvejas(ovejas) {
    var res = [];
    for (var i=0; i<ovejas.length; i++) {
        var oveja = ovejas[i];
        if (oveja.color == 'rojo' && oveja.name.toLowerCase().indexOf('n') > -1 && oveja.name.toLowerCase().indexOf('a') > -1) {
            res.push(oveja);
        }
    }
    return res;
}

var ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
];

var ovejasFiltradas = contarOvejas(ovejas);
console.log(ovejasFiltradas);

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]