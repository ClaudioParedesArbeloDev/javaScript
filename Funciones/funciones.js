/* let usuarioDB = "Nico"

let usuario = prompt("Ingrese el usuario")

let passwordDB = "1234"

let password = prompt("Ingrese Password")

if ((usuario === usuarioDB) && (password === passwordDB)) {
    alert ("Bienvenido " + usuario)
}else{
    alert ("Ud no es bienvenido")
}
 */

function saludar () {
    console.log("Saludo!!!!!")
}

saludar()
saludar()
saludar()

function solicitarNombre() {
    let nombreIngresado = "Claudio" //variable local
    alert("El nombre ingresado " + nombreIngresado)
}

let nombreIngresado = "Mica" //variable global
console.log(nombreIngresado)
/* solicitarNombre() */

function conParametros(parametro1, parametro2) {
    console.log(parametro1 + " " + parametro2)
}

conParametros("hola", "Betty")

conParametros("Estudiando", "JavaScript")

function suma (num1, num2){
    console.log(num1+num2)
}

suma(2, 3)

function resta (num1, num2){
    console.log(num1-num2)

}

resta(10, 5)

function multiplicar(num1, num2){
    return num1 * num2
}

let ej = multiplicar(3, 2)

let ej1 = multiplicar(4, 5)

suma(ej, ej1)

console.log(ej)

document.getElementById(productos)

