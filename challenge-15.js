'use strict';

function checkSledJump(heights) {
    var curr_state = 'up';
    var changes = 0;
    for (var i=0; i<heights.length-1; i++) {
        var curr = heights[i];
        var next = heights[i+1];
        var state = '';
        if (next > curr) {
            state = 'up';
        } else if (curr > next) {
            state = 'down';
        } else {
            return false;
        }
        if (curr_state !== state) {
            changes++;
        }
        curr_state = state;
    }
    if (changes === 1) {
        return true;
    }
    return false;
}


console.log(checkSledJump([1, 2, 3, 2, 1])); // true: sube y baja de forma estricta
console.log(checkSledJump([0, 1, 0])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 3, 2, 1])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 1000, 1])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([2, 4, 4, 6, 2])); // false: no sube de forma estricta
console.log(checkSledJump([1, 2, 3])); // false: sólo sube
console.log(checkSledJump([1, 2, 3, 2, 1, 2, 3])); // false: sube y baja y sube... ¡no vale!
