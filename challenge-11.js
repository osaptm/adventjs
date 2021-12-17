'use strict';

function shouldBuyFidelity(times) {
    var price = 12;
    var total = price * times;
    
    var card = 250;
    var discount = 0.75;
    var totalSpent = card;
    
    for (var i=0; i<times; i++) {
        price = price * discount;
        totalSpent += price;
    }
    
    if (total > totalSpent) {
        return true;
    }
    return false;
}


console.log(shouldBuyFidelity(1)); // false -> Mejor comprar tickets de un sólo uso
console.log(shouldBuyFidelity(100)); // true -> Mejor comprar tarjeta fidelidad
