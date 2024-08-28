let contenedor = document.getElementById("contenedor")

contenedor.innerHTML = "<h2>Hola Mundo</h2>"

//agregar una clase
contenedor.className = "container row"

//Crear un elemento
let parrafo = document.createElement("p")

parrafo.innerHTML = "<h2>Hola mundito</h2>"

document.body.append(parrafo)

//Eliminar un elemento
parrafo.remove()

document.getElementById("nombre").value = "Claudio"
document.getElementById("edad").value = 44

//Capturamos el id
let padre = document.getElementById("personas")

//Creamos un array
let personas = ["Leila", "Pablo", "Mica", "Bety", "Facu"]

//Iteramos el array
for (const persona of personas) {
    //Creamos el elemento li
    let li = document.createElement("li")
    //Agregarle informacion al elemento creado
    li.innerHTML = persona
    //Agregarle a li como hijo al id capturado previamente
    padre.appendChild(li)

}

