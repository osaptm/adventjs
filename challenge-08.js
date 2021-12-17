'use strict';

function maxProfit(prices) {
    var max = 0;
    for (var i=0; i<prices.length; i++) {
        var buy = prices[i];
        var prices2 = prices.slice(i+1);
        for (var j=0; j<prices2.length; j++) {
            var sell = prices2[j];
            var profit = sell-buy;
            if (profit > max) {
                max = profit;
            }
        }
    }
    return max || -1;
}


var pricesBtc = [39, 18, 29, 25, 34, 32, 5];
console.log(maxProfit(pricesBtc)); // -> 16 (compra a 18, vende a 34)

var pricesEth = [10, 20, 30, 40, 50, 60, 70] ; 
console.log(maxProfit(pricesEth)); // -> 60 (compra a 10, vende a 70)

var pricesDoge = [18, 15, 12, 11, 9, 7];
console.log(maxProfit(pricesDoge)); // -> -1 (no hay ganancia posible)

var pricesAda = [3, 3, 3, 3, 3];
console.log(maxProfit(pricesAda)); // -> -1 (no hay ganancia posible)
