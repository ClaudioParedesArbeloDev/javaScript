let productos = [
    {id: 1,visualicion: true,  marca:"ADIDAS", stock: 10, descripcion: "Botas de fútbol Adidas Copa Gloro FG Adulto Negro", precio: 55.49, img:"../img/botin.avif"},
    {id: 2,visualicion: true, marca:"PUMA", stock: 14, descripcion: "Balón de fútbol puma La Liga Orbita 24/25 Talla 5", precio: 22.99 , img:"../img/pelota.avif"},
    {id: 3,visualicion: true, marca:"ADIDAS", stock: 8 ,descripcion:"Balón UEFA Champions League Adidas 2025 Talla 5" , precio: 27.99, img:"../img/pelota2.avif"},
    {id: 4,visualicion: true, marca:"PUMA", stock: 7, descripcion:"Botas de fútbol multitacos FUTURE 7 Play TF Niño Azul", precio: 41.99,img:"../img/botin2.avif"},
    {id: 5,visualicion: false, marca:"PUMA", stock: 10, descripcion:"Botas de fútbol FUTURE 7 Laceless Adulto" , precio: 77.99 ,img:"../img/botin3.avif"},
    {id: 6,visualicion: true, marca:"KALENJI", stock: 17, descripcion:"Camiseta de Running transpirable mujer - KIPRUN Run 100 rosa fucsia", precio:4.99 ,img:"../img/camiseta.avif"},
    {id: 7,visualicion: true, marca:"ADIDAS", stock: 0, descripcion:"Camiseta Adidas Mujer Negro Estampada Logo", precio: 24.99 ,img:"../img/camiseta2.avif"},
    {id: 8,visualicion: true, marca:"QUECHUA", stock: 13, descripcion:"Camiseta de montaña y trekking manga corta Mujer Quechua MH100", precio:4.99 ,img:"../img/camiseta3.avif"},
    {id: 9,visualicion: true, marca:"ADIDAS" , stock: 16, descripcion:"Mochila escolar adidas azul marino", precio:23.99,img:"../img/mochila.avif"},
    {id: 10,visualicion: true, marca:"QUECHUA", stock: 15, descripcion:"Mochila de montaña y senderismo 20L Quechua NH100. Equipaje de mano", precio:9.99,img:"../img/mochila2.avif"}
]

let usuario = document.getElementById("usuario")
let usuarioRecuperado = localStorage.getItem("usuario")
console.log(usuarioRecuperado)
usuario.innerHTML= `<h3>Hola ${usuarioRecuperado}</h3>`

let contenedorProductos = document.getElementById("contenedorProductos")
let arrayCarrito = []

renderizarProductos(productos)

function renderizarProductos(arrayProductos){
    contenedorProductos.innerHTML = ''
    for (const producto of arrayProductos) {
        let tarjetaProducto = document.createElement("div")
        if(producto.visualicion == true) {
        
        if (producto.stock == 0) {
            tarjetaProducto.className = "productoSinStock"
          } else {
            tarjetaProducto.className = "producto"
          }
        

    tarjetaProducto.innerHTML = `
      <img src=${producto.img}  
      <h3 class="nombreProducto">${producto.marca}</h3>
      <p>${producto.descripcion}</p>
      <h4>$${producto.precio}</h4>
      <p>Quedan ${producto.stock} u.</p>
      
      <button id=${producto.id} class="btnComprar" >Añadir al carrito</button>
      `

    contenedorProductos.append(tarjetaProducto)
    }else{
      console.log("producto oculto")
    }
  }
   
  
}




let input = document.getElementById("input")
input.addEventListener("input", fnInput)

function fnInput(event){
    let productosFiltrados = productos.filter(producto => producto.marca.includes(input.value))
    console.log(productosFiltrados)
    renderizarProductos(productosFiltrados) 
}

let btnComprar = document.getElementsByClassName("btnComprar")

for (const boton of btnComprar) {
    boton.addEventListener("click", fnBtn)
    
}

function fnBtn (e) {
  console.log(e.target)
   let productoBuscado = productos.find(producto => producto.id == e.target.id)
   console.log(productoBuscado)
      
   if(productoBuscado.stock == 0){
    alert("No hay stock de ese producto")
   }else{
    arrayCarrito.push({ 
        id: productoBuscado.id, 
        marca:productoBuscado.marca, 
        descripcion:productoBuscado.descripcion,
        precio: productoBuscado.precio,
        unidades: 1,
        subtotal: productoBuscado.precio,})
   console.log(arrayCarrito)
  }

  let nroProductos = document.getElementById("nroProducto")
  nroProductos.innerHTML= `<p>${arrayCarrito.length}</p>`
  
  let carritoJson = JSON.stringify(arrayCarrito)
  console.log(carritoJson)
  localStorage.setItem("carrito", carritoJson)
     
}





