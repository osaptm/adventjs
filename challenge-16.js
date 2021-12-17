'use strict';

function decodeNumber(symbols) {
    var mapping = {
        '.' : 1,
        ',' : 5,
        ':' : 10,
        ';' : 50,
        '!' : 100,
    };
    var total = 0;
    var prev = mapping[symbols[0]] || NaN;
    if (isNaN(prev)) {
        return NaN;
    }
    for (var i=0; i<symbols.length; i++) {
        var curr = mapping[symbols[i]] || NaN;
        if (isNaN(curr)) {
            return NaN;
        }
        if (curr > prev) {
            total += curr-prev-prev;
        } else {
            total += curr;
        }
        prev = curr;
    }
    return total;
}


console.log(decodeNumber('...')); // 3
console.log(decodeNumber('.,')); // 4 (5 - 1)
console.log(decodeNumber(',.')); // 6 (5 + 1)
console.log(decodeNumber(',...')); // 8 (5 + 3)
console.log(decodeNumber('.........!')); // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
console.log(decodeNumber('.;')); // 49 (50 - 1)
console.log(decodeNumber('..,')); // 5 (-1 + 1 + 5)
console.log(decodeNumber('..,!')); // 95 (1 - 1 - 5 + 100)
console.log(decodeNumber('.;!')); // 49 (-1 -50 + 100)
console.log(decodeNumber('!!!')); // 300
console.log(decodeNumber(';!')); // 50
console.log(decodeNumber(';.W')); // NaN
