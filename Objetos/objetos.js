const persona = {
    nombre: "Claudio", 
    apellido: "Paredes", 
    edad: 44
}

console.log(persona.nombre)

console.log(persona["apellido"])

persona.edad=34

persona["nombre"] = "Jorge"

console.log(persona.nombre)

console.log(persona.edad)

function Socio(nombre, apellido, domicilio, dni){
    this.nombre = nombre;
    this.apellido = apellido;
    this.domicilio = domicilio;
    this.dni= dni;
}

const socio1 = new Socio("Claudio", "Paredes", "Arijon 515", 27888864);
const socio2 = new Socio("Jorge", "Garcia", "Muñoz 888", 28964534);

console.log(socio1.nombre)