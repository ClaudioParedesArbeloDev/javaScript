let mainCarrito = document.getElementById("mainCarrito")

mainCarrito.innerHTML= `<h2>Carro de compras</h2>`

let arrayCarrito = JSON.parse(localStorage.getItem("carrito"))
console.log(arrayCarrito)

let carrito = ""

 renderizarCarrito(arrayCarrito)

function renderizarCarrito(array) {
    carrito.innerHTML = ""
    for (const itemCarrito of array) {
        carrito.innerHTML += `
                <div class= "itemCarrito">
                    <h4>${itemCarrito.marca}</h4>
                    <h4>${itemCarrito.descripcion}</h4>
                    <h4>${itemCarrito.unidades}</h4>
                    <h4>${itemCarrito.subtotal}</h4>
        `
    }

    mainCarrito.append(carrito)
    
} 