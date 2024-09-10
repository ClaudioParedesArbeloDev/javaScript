let usuario = prompt("Ingrese su Usuario")

let bienvenido = document.getElementById("bienvenido")

bienvenido.innerHTML= `<img src="./img/logo.png">
                        <h3>Bienvenido</h3>
                        <h2>${usuario}</h2>
                        <a href="./paginas/home.html"><button>Ingresar</button></a>`


localStorage.setItem('usuario', `${usuario}`)