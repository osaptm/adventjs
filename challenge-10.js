'use strict';

function getCoins(change) {
    var coins = [50, 20, 10, 5, 2, 1];
    var res = [];
    for (var i=0; i<coins.length; i++) {
        var coin = coins[i];
        if (change >= coin) {
            var div = parseInt(change / coin);
            change = change % coin;
            res[i] = div;
        } else {
            res[i] = 0;
        }
    }
    return res.reverse();
}


console.log(getCoins(51)); // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
console.log(getCoins(3)); // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
console.log(getCoins(5)); // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
console.log(getCoins(16)); // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
console.log(getCoins(100)); // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
