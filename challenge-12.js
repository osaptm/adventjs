'use strict';

function getMinJump(obstacles) {
    var route = [];
    var len = Math.max(...obstacles);
    
    for (var i=0; i<=len; i++) {
        if (obstacles.indexOf(i) > -1) {
            route.push('X');
        } else {
            route.push('.');
        }
    }
    
    for (i=1; i<=len; i++) {
        var start = 0;
        var jump  = i;
        var hit   = false;
        
        while (true) {
            var pos  = start+jump;
            if (pos >= route.length) {
                return jump;
            }
            var land = route[pos];
            if (land === 'X') {
                break;
            }
            start = pos;
        }
    }
    return 0;
}


var obstacles = [5, 3, 6, 7, 9];
console.log(getMinJump(obstacles)); // -> 4

// S es salto, X es obstáculo
/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  .  X  .  X  X  X  .  X  . 
S-----------S-----------S-------
*/

var obstacles = [2, 4, 6, 8, 10];
console.log(getMinJump(obstacles)); // -> 7

/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  X  .  X  .  X  .  X  .  X 
S--------------------S---------

// Longitudes de salto:
// 1 caería en el 2
// 2 caería en el 2
// 3 caería en el 6
// 4 caería en el 4
// 5 caería en el 10
// 6 caería en el 6
// 7 es el ideal!!! ✅

getMinJump([1, 2, 3, 5]) // -> 4
getMinJump([3, 7, 5]) // -> 2
getMinJump([9, 5, 1]) // -> 2
*/
