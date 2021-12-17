'use strict';

function missingReindeer(ids) {
    var a = new Set(ids);
    var b = new Set();
    for (var i=0; i<=ids.length; i++) {
        b.add(i);
    }
    let difference = new Set([...b].filter(x => !a.has(x)));
    return [...difference][0];
}

console.log(missingReindeer([0, 2, 3])); // -> 1
console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0])); // -> 4
console.log(missingReindeer([0, 1])); // -> 2 (¡es el último el que falta!)
console.log(missingReindeer([3, 0, 1])); // -> 2
console.log(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1])); // -> 8
console.log(missingReindeer([0])); // -> 1 (¡es el último el que falta!)
