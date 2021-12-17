'use strict';

function listGifts(letter) {
    var words = letter.split(' ');
    var regalos = {};
    for (var i=0; i<words.length; i++) {
        var word = words[i].trim();
        if (!word) continue;
        if (word[0]==='_') continue;
        if (regalos[word] !== undefined) {
            regalos[word] += 1;
        } else {
            regalos[word] = 1;
        }
    }
    return regalos;
}

var carta = 'bici coche balón _playstation bici coche peluche';

var regalos = listGifts(carta);
console.log(regalos);
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/