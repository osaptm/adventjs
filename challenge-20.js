'use strict';

function pangram(letter) {
    var abc = 'abcdefghijklmnñopqrstuvwxyz';
    var found = new Set();
    var mapping = {
        'à': 'a', 'á': 'a', 'ä': 'a', 'â': 'a',
        'è': 'e', 'é': 'e', 'ë': 'e', 'ê': 'e',
        'ì': 'i', 'í': 'i', 'ï': 'i', 'î': 'i',
        'ò': 'o', 'ó': 'o', 'ö': 'o', 'ô': 'o',
        'ù': 'u', 'ú': 'u', 'ü': 'u', 'û': 'u',
    };
    for (var i=0; i<abc.length; i++) {
        var char = abc[i];
        var norm = mapping[char] || char;
        if (letter.toLowerCase().indexOf(norm) > -1) {
            found.add(norm);
        }
    }
    if (found.size === abc.length) {
        return true;
    }
    return false;
}


console.log(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')); // true
console.log(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')); // true
console.log(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')); // false
console.log(pangram('De la a a la z, nos faltan letras')); // false
