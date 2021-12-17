'use strict';

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
