let productos = [
    {id: 1, marca:"ADIDAS", descripcion: "Botas de fútbol Adidas Copa Gloro FG Adulto Negro", precio: 55.49, img:"./img/botin.avif"},
    {id: 2, marca:"PUMA", descripcion: "Balón de fútbol puma La Liga Orbita 24/25 Talla 5", precio: 22.99 , img:"./img/pelota.avif"},
    {id: 3, marca:"ADIDAS", descripcion:"Balón UEFA Champions League Adidas 2025 Talla 5" , precio: 27.99, img:"./img/pelota2.avif"},
    {id: 4, marca:"PUMA", descripcion:"Botas de fútbol multitacos FUTURE 7 Play TF Niño Azul", precio: 41.99,img:"./img/botin2.avif"},
    {id: 5, marca:"PUMA", descripcion:"Botas de fútbol FUTURE 7 Laceless Adulto" , precio: 77.99 ,img:"./img/botin3.avif"},
    {id: 6, marca:"KALENJI", descripcion:"Camiseta de Running transpirable mujer - KIPRUN Run 100 rosa fucsia", precio:4.99 ,img:"./img/camiseta.avif"},
    {id: 7, marca:"ADIDAS", descripcion:"Camiseta Adidas Mujer Negro Estampada Logo", precio: 24.99 ,img:"./img/camiseta2.avif"},
    {id: 8, marca:"QUECHUA", descripcion:"Camiseta de montaña y trekking manga corta Mujer Quechua MH100", precio:4.99 ,img:"./img/camiseta3.avif"},
    {id: 9, marca:"ADIDAS" , descripcion:"Mochila escolar adidas azul marino", precio:23.99,img:"./img/mochila.avif"},
    {id: 10, marca:"QUECHUA", descripcion:"Mochila de montaña y senderismo 20L Quechua NH100. Equipaje de mano", precio:9.99,img:"./img/mochila2.avif"}
   
]

let btnComprar = document.getElementById("comprar")
btnComprar.onclick = () => {
    localStorage.clear()
    carrito.innerHTML= ""
}

let contenedorProductos = document.getElementById("contenedorProductos")
let carrito = document.getElementById("carrito")
let arrayCarrito = []

if(localStorage.getItem("carrito")) {
    arrayCarrito = JSON.parse(localStorage.getItem("carrito"))
}

renderizarCarrito()
renderizarProductos(productos)

function renderizarProductos(arrayProductos) {
    contenedorProductos.innerHTML = ''
    for (const producto of arrayProductos) {
        let tarjetaProducto = document.createElement("div")

        if (producto.stock < 5){
            tarjetaProducto.className = "productoSinStock"
        }
    }
}


for (const producto of productos) {
let insertion = document.createElement("div")
insertion.classList.add("entrada")
insertion.innerHTML = `<img src=${producto.img}>
                        <h4>${producto.marca}</h4>
                        <p>${producto.descripcion}</p>
                        <p>$${producto.precio}</p>
                        <button id="comprar">Comprar</button>`

let mainElement = document.querySelector('main')
mainElement.appendChild(insertion)
}

let search = document.getElementById("search")
search.addEventListener("input", ()=>{console.log(search.value)})


const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)}

for(const producto of productos) {
    guardarLocal(producto.id , JSON.stringify(producto))
}

guardarLocal("listaProductos", JSON.stringify(productos))





