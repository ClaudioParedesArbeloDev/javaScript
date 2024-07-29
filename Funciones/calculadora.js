function calculadora(num1, num2, operacion ){
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

console.log(calculadora(10, 5, "+" ))