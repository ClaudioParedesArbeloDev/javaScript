var number = 4 // variable tipo number

let numero = 5 // variable tipo let (que puede modificar el valor) tipo number

const nombre = "Claudio" //variable tipo string o cadena de texto (no se puede modificar su valor)

//prompt es una forma de pedir al usuario que ingrese datos

//alert mostrar al usuario un cartel con informacion

let Number1 = prompt("ingrese numero")

 for (let i = 0; i < 10; i++) {
    const resultado = Number1 * i
    console.log(resultado)
 }

/*
for (let i = 1; i <= 20; i++) {
    let ingreseNombre = prompt("Ingresar nombre");
    alert("Turno Nº " +i+ " Nombre: "+ingreseNombre);
} */

let Number = parseInt(prompt("ingrese un numero")) // parseInt sirve para que el dato ingresado sea tipo number
//parseFloat es para que se tipo number, pero acepta decimales
//parseInt va a ser de tipo number, pero es para numero enteros
console.log(Number)

let Numero = prompt("Ingrese numero") // prompt va a ser tipo String o cadena de texto

console.log(Numero)