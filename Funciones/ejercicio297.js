const suma = (a, b) => a + b
const resta = (a, b) => a - b

const iva = x => x * 0.21

let descuento = 50

let precioProducto = 400


let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento)

console.log(nuevoPrecio);



const iba = (a, b) => (((a * 0.21) +a)-b)

let precioNuevo = iba(precioProducto, descuento)

console.log(precioNuevo)