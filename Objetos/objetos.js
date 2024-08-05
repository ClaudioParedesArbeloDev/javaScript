const persona = {
    nombre: "Claudio", 
    apellido: "Paredes", 
    edad: 44
}

console.log(persona.edad)

console.log(persona["apellido"])

persona.edad= 34

persona["nombre"] = "Jorge"

console.log(persona.nombre)

console.log(persona.edad)

function Socio(nombre, apellido, domicilio, dni, cel){
    this.nombre = nombre;
    this.apellido = apellido;
    this.domicilio = domicilio;
    this.dni = dni;
    this.cel = cel;
}

const socio1 = new Socio("Claudio", "Paredes", "Arijon 515", 27888864, 3413181379);
const socio2 = new Socio("Jorge", "Garcia", "Muñoz 888", 28964534, 3413589696);

console.log(socio1.nombre)
console.log(socio2.nombre)


let metodo = "Hola Mundo hoy Domingo"

console.log(metodo.length)//contar los caracteres

console.log(metodo.toUpperCase())//pasa a mayuscula

console.log(metodo.toLowerCase())//pasa a minuscula


const productos = {
    marca: "adidas",
    descripcion: "zapatilla",
    precio: 70
}

function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.hablar = function(){console.log("Hola soy " + this.nombre)}
}

const persona1 = new Persona("Homero", 39, "Arijon 515");
const persona2 = new Persona("Marge", 36, "Arijon 515");

persona1.hablar()
persona2.hablar()

console.log("nombre" in persona1)
console.log("celular" in persona1)

for (const propiedad in persona1) {
    console.log(persona1[propiedad]);
}

for (const key in persona2) {
    alert(persona2[key])
    }


class Auto{
    constructor(marca, modelo, combustible){
        this.marca = marca;
        this.modelo = modelo;
        this.combustible = combustible;
    }
    hablar(){
        console.log("Soy un auto marca " + this.marca + " y soy modelo " + this.modelo + " y utilizo combustible " + this.combustible);
    }
}

const auto1 = new Auto("fiat", "punto", "diesel");

auto1.hablar()

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumarIva() { this.precio = this.precio * 1.21 };
    vender() {this.vendido = true} ;
}

const producto1 = new Producto("arroz", "125");
const producto2 = new Producto("fideo", "50");

producto1.sumarIva();
console.log(producto1)
producto2.sumarIva();
console.log(producto2)
producto1.vender();
console.log(producto1)
