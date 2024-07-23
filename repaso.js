//Variable

var letra = "a" //String

let numero = 5 //Number

const boleana = true //Booleano

//condicinal
if( numero < 10){
  console.log("Numero es mas chico que 10")
}else if(numero < 20){
    console.log("Numero es mas chico que 20")
}else{
    console.log("Numero es muy grande")
}

for (let index = 0; index < 10; index++) {
    console.log(index * numero);
    
}

/* let entrada = prompt("Ingrese su nombre")

while(entrada != "ESC"){
    alert("El usuario ingreso " + entrada);
    entrada = prompt("Ingresar otro dato");
}
 

do{
    numero = prompt("Ingresar Numero");
    console.log(numero);
}while(parseInt(numero)) */


let producto = "banana"

switch (producto) {
    case "banana":
        console.log("compro bananas");
        break;
    case "anana":
        console.log("compro anana");
        break;
    default:
        console.log("Compro verdura");
        break;
}
      
