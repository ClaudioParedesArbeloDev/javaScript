class Persona{
    constructor(nombre, edad, calle){
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }
    hablar(){
        console.log("Hola soy "+ this.nombre);
    }
}

const persona1 = new Persona("Homer", 39, "arijon 515");
persona1.hablar()



class Producto{
    constructor(nombre, precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumarIva(){
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
}

const producto1 = new Producto("arroz", "125");
const producto2 = new Producto("fideo", "50");

producto1.sumarIva();
console.log(producto1)
producto2.sumarIva();
producto1.vender();
console.log(producto1)
console.log(producto2)

