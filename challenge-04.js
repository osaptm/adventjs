'use strict';
function createXmasTree_mario(height) { console.time('loop');
    if(height<1||height>100||typeof height!='number') return false;
       let base = height + (height-1); let cadena = ''; let tronco = '';
       for (let index = 0; index < height; index++) {
           let cantidad_asteriscos = (index+1)+index;
           let guion = '_'.repeat((base-cantidad_asteriscos)/2);
           let asteriscos =  '*'.repeat(cantidad_asteriscos);
           if(index==0){ tronco += `${guion}#${guion}\n${guion}#${guion}`;}
           cadena += `${guion}${asteriscos}${guion}\n`;
       }
       console.timeEnd('loop');
       return cadena+tronco;
   }
function createXmasTree(height) {
    var lines = [];
    var width = height + height - 1;
    
    var line;
    var stars = 1;
    
    for (var i=0; i<height; i++) {
        var mid = height-parseInt(stars/2)-1;
        line = '';
        var stars_painted = 0;
        for (var j=0; j<width; j++) {
            if (j>=mid && stars_painted<stars) {
                line += '*';
                stars_painted += 1;
            } else {
                line += '_';
            }
        }
        lines.push(line);
        stars += 2;
    }
    
    for (i=0; i<2; i++) {
        line = '';
        for (j=0; j<width; j++) {
            var mid = parseInt(width/2);
            if (j===mid) {
                line += '#';
            } else {
                line += '_';
            }
        }
        lines.push(line);
    }
    
    var tree = lines.join('\n');
    return tree;
}

console.log(createXmasTree(5));
console.log(createXmasTree(3));
