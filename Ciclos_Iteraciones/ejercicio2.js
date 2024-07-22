 for (let i = 1; i <=10; i++){
    if(i == 5){
        break;
    }
    console.log(i);
} 

for (let number = 1; number <= 10; number++){
    if(number==5){
        continue;
    }
    console.log(number)
}

let entrada = prompt("Ingrese un dato");

while(entrada != "ESC"){
    alert("El usuario ingreso " + entrada);
    entrada = prompt("Ingresar otro dato");
}

let numero = 0;
do{
    numero = prompt("Ingresar Numero");
    console.log(numero);
}while(parseInt(numero))
      

let entrada = prompt("Ingresar nombre");

while(entrada != "ESC"){
    switch (entrada) {
        case "Ana":
            alert("Hola Ana");
            break;
        case "Juan":
            alert("Hola Juan");
            break;
        default:
            alert("Quien sos?");
            break;
    }
    entrada = prompt("Ingresar Nombre")
}


