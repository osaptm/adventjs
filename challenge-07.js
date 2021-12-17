'use strict';

function contains(store, product) {
    var res = false;
    for (var key in store) {
        var value = store[key];
        if (typeof value === 'object') {
            res = contains(value, product);
        } else {
            if (value === product) {
                return true;
            }
        }
    }
    return res;
}

var almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- ¡Está aquí!
    }
  }
};

console.log(contains(almacen, 'camiseta')); // true

var otroAlmacen = {
  'baul': {
    'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
};

console.log(contains(otroAlmacen, 'gameboy')); // false
