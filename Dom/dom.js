let div = document.getElementById("app")
let parrafo = document.getElementById("parrafo1")
console.log(div.innerHTML)
console.log(parrafo.innerHTML)




let paises = document.getElementsByClassName("paises")

console.log(paises[0].innerHTML)

for (const pais of paises) {

    console.log(pais.innerHTML)
    
} 

let mundo=document.getElementById("titulo")
console.log(mundo.innerText)

mundo.innerText = "Hola Clase"

let contenido = document.getElementById("contenido")

contenido.innerHTML= "<h2>Hola Mundo </h2><p>Hola como va?</p><hr/>"



