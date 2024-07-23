function calculadora(num1, operacion, num2 ){
    switch(operacion){
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            return num1 / num2;
            break;
        default:
            return 0;
            break
    }
}

console.log(calculadora(10,"*", 5 ))