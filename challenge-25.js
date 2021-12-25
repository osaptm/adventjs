'use strict';

function canMouseEat(direction, game) {
    var food  = {};
    var mouse = [];
    for (var i=0; i<game.length; i++) {
        var row = game[i];
        for (var j=0; j<row.length; j++) {
            var col = row[j];
            if (col === 'm') {
                mouse = [i, j];
            } else if (col === '*') {
                food[i+'-'+j] = true;
            }
        }
    }
    var coords;
    if (direction === 'up') {
        coords = (mouse[0]-1)+'-'+(mouse[1]);
    } else if (direction === 'down') {
        coords = (mouse[0]+1)+'-'+(mouse[1]);
    } else if (direction === 'right') {
        coords = (mouse[0])+'-'+(mouse[1]+1);
    } else if (direction === 'left') {
        coords = (mouse[0])+'-'+(mouse[1]-1);
    }
    if (food[coords] !== undefined) {
        return true;
    }
    return false;
}


var room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
];

console.log(canMouseEat('up',    room)); // false
console.log(canMouseEat('down',  room)); // true
console.log(canMouseEat('right', room)); // false
console.log(canMouseEat('left',  room)); // false

var room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*']
];

console.log(canMouseEat('up',    room2)); // false
console.log(canMouseEat('down',  room2)); // false
console.log(canMouseEat('right', room2)); // true
console.log(canMouseEat('left',  room2)); // false
