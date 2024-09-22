let mainCarrito = document.getElementById("mainCarrito")

let arrayCarrito = JSON.parse(localStorage.getItem("carrito"))
console.log(arrayCarrito)

let carrito = ""

renderizarCarrito(arrayCarrito)


function renderizarCarrito(array) {
    mainCarrito.innerHTML = '<h2>Lista de compras</h2>'
    for (const itemCarrito of array) {
        let productoXComprar = document.createElement("div")
        productoXComprar.innerHTML = `
                    <h4>${itemCarrito.marca}</h4>
                    <p>${itemCarrito.descripcion}</p>
                    <p>${itemCarrito.unidades}</p>
                    <h3>${itemCarrito.subtotal}</h3>
        `
        mainCarrito.append(productoXComprar)
    }
    
}

let total = document.getElementById("total")

rederizarTotal(arrayCarrito)

function rederizarTotal(array) {
        
        let suma = 0
        for (const productos of array) {
             suma += productos.subtotal 
        }
        
    total.innerHTML= `<p>Total</p> $${suma}`
}


function contrasenaValida (string){
    if(string === "2Fj(jjbFsuj" || string === "eoZiugBf&g9"){
        console.log(true)
    }else(console.log(false))
}

console.log(contrasenaValida("2Fj(jjbFsuj")) // true
console.log(contrasenaValida("eoZiugBf&g9")) // true
console.log(contrasenaValida("hola")) // false
console.log(contrasenaValida("")) // false