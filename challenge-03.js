'use strict';

function isValid(letter) {
    var invalidChars = ['{','}','[',']'];
    var regex = /\((.+)\)/gm;
    var regex2 = /\((.+)?\)/gm;
    var res = regex.exec(letter);
    if (res && res.length > 1 && res[1]) {
        var res2 = regex2.exec(res[1]);
        if (res2 && res2.length > 1 && !res2[1]) {
            return false;
        }
        for (var i=0; i<res[1].length; i++) {
            var char = res[1][i];
            if (invalidChars.indexOf(char) > -1) {
                return false;
            }
        }
        return true;
    }
    return false;
}

console.log(isValid("bici coche (balón) bici coche peluche")); // -> ✅
console.log(isValid("(muñeca) consola bici")); // ✅
console.log(isValid("bici coche (balón bici coche")); // -> ❌
console.log(isValid("peluche (bici [coche) bici coche balón")); // -> ❌
console.log(isValid("(peluche {) bici")); // -> ❌
console.log(isValid("() bici")); // ❌