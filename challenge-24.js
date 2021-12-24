'use strict';

function checkIsSameTree(treeA, treeB) {
    function treeToList(tree) {
        var elements = [];
        for (var key in tree) {
            if (typeof tree[key] === 'object') {
                elements = elements.concat(treeToList(tree[key]));
            } else if (tree[key] !== null) {
                elements.push(key+'-'+tree[key]);
            }
        }
        return elements;
    }
    function serializeTree(tree) {
        var list = treeToList(tree);
        var sorted = list.sort(function(a, b) {
            if (a > b) {
                return 1;
            } else if (b > a) {
                return -1;
            }
            return 0;
        });
        return sorted.join('-');
    }
    
    var serializedTreeA = serializeTree(treeA);
    var serializedTreeB = serializeTree(treeB);
    
    if (serializedTreeA === serializedTreeB) {
        return true;
    }
    return false;
}


var tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null }
};

console.log(checkIsSameTree(tree, tree)); // true

var tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
};

console.log(checkIsSameTree(tree, tree2)); // false
console.log(checkIsSameTree(tree2, tree2)); // true


// extra check
var tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null }
};

tree2 = {
  value: 1,
  right: { value: 3, left: null, right: null },
  left: { value: 2, left: null, right: null },
};

console.log(checkIsSameTree(tree, tree2)); // true
