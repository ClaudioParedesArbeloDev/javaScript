let usuario = prompt("Ingrese su Nombre")

localStorage.setItem('usuario', `${usuario}`)

let bienvenido = document.getElementById("bienvenido")

bienvenido.innerHTML= `<img src="./img/logo.png">
                       <h3>Bienvenid@</h3>
                       <h2>${usuario}</h2>
                       <a href="./paginas/home.html"><button>Ingresar</button></a>`