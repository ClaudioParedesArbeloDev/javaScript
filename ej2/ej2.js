let sueldo = 90

if(sueldo < 100) {
    console.log("ud es pobre")
}else if(sueldo < 200){
    console.log("ud es casi pobre")
}else if(sueldo < 400){
    console.log("ud casi llega a fin de mes")
}else if(sueldo < 600){
    console.log("ud tiene un sueldo agraciado")
}else{
    console.log("ud es un papucho")
}
/* 
let nombreIngresado = prompt("Ingresar Nombre");

if ((nombreIngresado == "ANA") || (nombreIngresado == "ana")){
    alert("El usuario ingresado es Ana")
}else{
    alert("El usuario ingresado no es Ana")
} */
 
    let nombreIngresado = prompt("Ingrese su nombre")

    if(((nombreIngresado!="") && (nombreIngresado == "Ema")) || (nombreIngresado == "ema")){
        console.log("Es Ema")
    }else{console.log("Ingrese algun dato")}
 


