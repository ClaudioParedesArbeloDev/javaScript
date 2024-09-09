class Producto{
    constructor(obj){
        this.marca = obj.descripcion.toUpperCase();
        this.precio = parseFloat(obj.precio);
    }
    sumaIva() {
        this.precio = this.precio * 1.21 }
}

const almacenados = JSON.parse(localStorage.getItem("listaProductos"))
console.log(almacenados)
const productos = [];

for (const objeto of almacenados) {
    productos.push( new Producto(objeto))
  
}

for (const producto of productos) {
    producto.sumaIva()
    
}
console.log(productos)

let carrito = []
let carritoEnLS = JSON.parse.apply(localStorage.getItem("carrito"))

if(carritoEnLS){
    carrito=carritoEnLS
}

rederCarrito(carrito)
