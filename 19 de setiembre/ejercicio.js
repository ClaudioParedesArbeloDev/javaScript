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



function descuento (numeroId){
    let producto = productos.find((producto) => producto.id == numeroId)
    console.log(producto)
    let descuento = producto.precio - (producto.precio * 0.10)
    return descuento
}

console.log (descuento(4))

let edad = 19  
edad< 18 ? console.log("es menor de edad"):console.log("es mayor de edad")

if(edad < 18){
    console.log("es menor de edad")
}else(console.log("es mayor de edad"))