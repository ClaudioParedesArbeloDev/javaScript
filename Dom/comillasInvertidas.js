let producto = {id: 1, nombre: "Arroz", precio: 130}
let concatenado = "ID: " + producto.id + " Producto: " + producto.nombre + " $" + producto.precio

console.log(concatenado)

let plantilla = `ID: ${producto.id} Producto: ${producto.nombre} $${producto.precio}`
console.log(plantilla)

let contenedor = document.createElement("div")

contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                        <p> Producto: ${producto.nombre} </p>
                        <p> Precio: $${producto.precio}`

document.body.appendChild(contenedor)

const productos = [
    {id: 1, nombre: "Arroz", precio: 125},
    {id: 2, nombre: "Fideo", precio: 70},
    {id: 3, nombre: "Pan", precio: 50},
    {id: 4, nombre: "Flan", precio: 100}
]



for (const producto of productos) {
    let contenedor = document.createElement("div")
    contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                            <p> Producto: ${producto.nombre} </p>
                            <p> Precio: $${producto.precio} </p>`
    document.body.appendChild(contenedor)
}

let div = document.getElementById("div")
div.innerHTML = "<h1>Hola Mundo</h1>"