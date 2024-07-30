/* const persona = {
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
 */

let metodo = "Hola Mundo"

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
