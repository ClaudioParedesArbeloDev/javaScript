var number = 5
let precio = 5 //number
let name = "claudio" //string
const pi = 3.14
const apellido = 'claudio' //string
const cargo = `profesor`//string
const nombre = true //booleano
let nulo = null

precio = 7

name = "Luis"

console.log(precio)

console.log(name)

let num1 = 5

let num2 = 3

let suma = num1 + num2

let resta = num1 - num2

let multiplicacion = num1 * num2

let division = num1 / num2

console.log(suma)

console.log(resta)

console.log(multiplicacion)

console.log(division)

console.log(suma - resta)

let palabra1 = "Hola"

let palabra2 = "Mundo"

console.log(palabra1+ " " + palabra2) //concatenacion

let num3 = 4 //number

let num4 = "4" //string

console.log(num3 === num4) //boolean 

let ingreseNombre = prompt("ingrese su nombre") //prompt sirve para pedir al usuario que ingrese datos.

console.log(ingreseNombre)

alert("el usuario " + ingreseNombre)//El alert va a ser un cartel que muestre al usuario informacion



let edad = prompt("Ingrese su edad")

if (edad >= 18){
    console.log("Es mayor de edad")
}

let comp1 = "Hola"

let comp2 = "hola"

console.log(comp1 == comp2)

if (edad >= 18) {
    alert("Es mayor de edad")
}else {
    alert("No entras porque sos chiquito")
} 

let precio = 65

if(precio < 20) {
    console.log("El precio es menor a 20")
}else if(precio < 40){
    console.log("El precio es menor a 40")
}else if (precio < 60){
    console.log("El precio es menor a 60")
}else{
    console.log("es muy caro")
}

let temperatura = prompt("temperatura")

if (temperatura < 5) {
    console.log("Hace mucho frio")

}else if ( temperatura < 15) {
    console.log ("Esta lindo")
}else if (temperatura < 25) {
    console.log("hace calor")

}else {
    console.log("me muero de calor")
}

 let age = 19//number
let edad = "19"//String

console.log(age == edad)
console.log(age === edad)
console.log(age!=edad)
console.log(age!==edad)
