localStorage.setItem('bienvenida', 'Hola Mundo')
localStorage.setItem('esValido', true)
localStorage.setItem('unNumero', 20)

let mensaje = localStorage.getItem('bienvenida')
let bandera = localStorage.getItem('esValido')
let numero = localStorage.getItem('unNumero')

console.log(mensaje)
console.log(bandera)
console.log(numero)

sessionStorage.setItem('seleccionados', [1, 2, 3])
sessionStorage.setItem('esValido', false)

let lista = sessionStorage.getItem('seleccionados').split(",")
let bander = sessionStorage.getItem('esValido')

console.log(lista)
console.log(bander)

for (let i = 0; i < localStorage.length; i++){
    let clave = localStorage.key(i)
    console.log("Clave:" + clave)
    console.log("Valor:" + localStorage.getItem(clave))
}



const producto1 = {id: 2, producto: "Arroz"}

const enJson = JSON.stringify(producto1)

const producto2 = JSON.parse(enJson)

console.log(enJson)
console.log(typeof producto1)
console.log(typeof enJson)
console.log(producto2)

/* localStorage.removeItem("bienvenida")

localStorage.clear()
 */
