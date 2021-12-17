'use strict';

function wrapGifts(gifts) {
    if (gifts.length===0) {
        return [];
    }
    
    var width = gifts[0].length+2;
    
    var res = [];
    var top = '';
    for (var i=0; i<width; i++) {
        top += '*';
    }
    res.push(top);
    
    for (i=0; i<gifts.length; i++) {
        var middle = '*';
        middle += gifts[i];
        middle += '*';
        res.push(middle);
    }
    
    var bottom = '';
    for (i=0; i<width; i++) {
        bottom += '*';
    }
    res.push(bottom);
    
    return res;
}



console.log(wrapGifts(["📷", "⚽️"]));
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

console.log(wrapGifts(["🏈🎸", "🎮🧸"]));
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

console.log(wrapGifts(["📷"]));
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/
