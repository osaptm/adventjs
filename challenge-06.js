'use strict';

function sumPairs(numbers, result) {
    for (var i=0; i<numbers.length; i++) {
        for (var j=0; j<numbers.length; j++) {
            if (i===j) continue;
            var curr = numbers[i];
            var next = numbers[j];
            var sum  = curr + next;
            if (sum === result) {
                return [curr, next];
            }
        }
    }
    return null;
}

console.log(sumPairs([3, 5, 7, 2], 10)); // [3, 7]
console.log(sumPairs([-3, -2, 7, -5], 10)); // null
console.log(sumPairs([2, 2, 3, 1], 4)); // [2, 2]
console.log(sumPairs([6, 7, 1, 2], 8)); // [6, 2]
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)); // [1, 5]