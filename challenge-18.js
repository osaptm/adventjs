'use strict';

function fixFiles(files) {
    var count = {};
    var names = [];
    for (var i=0; i<files.length; i++) {
        var file = files[i];
        if (count[file] !== undefined) {
            count[file] += 1;
        } else {
            count[file] = 1;
        }
        var name = file;
        if (count[file] > 1) {
            name = file+'('+(count[file]-1)+')';
        }
        names.push(name);
    }
    return names;
}

var files = ['photo', 'postcard', 'photo', 'photo', 'video'];
console.log(fixFiles(files)); // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

var files2 = ['file', 'file', 'file', 'game', 'game'];
console.log(fixFiles(files2)); // ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

// ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
var files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)'];
console.log(fixFiles(files3)); // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']
