let boton = document.getElementById("btnPrincipal")
boton.addEventListener("click", respuestaClick)
function respuestaClick(){
    alert("Apretaste el Boton")
    console.log("Respuesta al click")

}

let botonDos = document.getElementById("btnBotonDos")
botonDos.onclick = () =>{
    console.log("Respuesta al boton 2") 
    alert("Presion")
}

let input1 = document.getElementById("nombre")
let input2 = document.getElementById("edad")

input1.onkeyup = () => {console.log("Solto la tecla")}
input2.onkeydown = () => {console.log("presiono la tecla")}
input1.onchange = () => {console.log("Algo cambio")}
input2.addEventListener("input", () =>{console.log(input2.value)})