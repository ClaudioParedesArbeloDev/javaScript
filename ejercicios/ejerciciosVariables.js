/* Ejercicios de tipos de datos

1. Escribir un programa que muestre por pantalla la cadena ¡Hola Mundo!.

2. Escribir un programa que almacene la cadena ¡Hola Mundo! en una variable y luego muestre por
pantalla el contenido de la variable.

3. Escribir un programa que pregunte el nombre del usuario en la consola y después de que el usuario lo
introduzca muestre por pantalla la cadena ¡Hola <nombre>!, donde <nombre> es el nombre que el
usuario haya introducido.

4. Escribir un programa que muestre por pantalla el resultado de la siguiente operación aritmética

5. Escribir un programa que pregunte al usuario por el número de horas trabajadas y el coste por hora.
Después debe mostrar por pantalla la paga que le corresponde.

6. Escribir un programa que pida al usuario su peso (en kg) y estatura (en metros), calcule el índice de
masa corporal y lo almacene en una variable, y muestre por pantalla la frase Tu índice de masa corporal
es <imc> donde <imc> es el índice de masa corporal calculado redondeado con dos decimales.

7. Escribir un programa que pida al usuario dos números enteros y muestre por pantalla la <n> entre <m>
da un cociente <c> y un resto <r> donde <n> y <m> son los números introducidos por el usuario, y <c>
y <r> son el cociente y el resto de la división entera respectivamente.

8. Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el número de
años, y muestre por pantalla el capital obtenido en la inversión.

9. Una juguetería tiene mucho éxito en dos de sus productos: payasos y muñecas. Suele hacer venta por
correo y la empresa de logística les cobra por peso de cada paquete así que deben calcular el peso de los
payasos y muñecas que saldrán en cada paquete a demanda. Cada payaso pesa 112 g y cada muñeca 75
g. Escribir un programa que lea el número de payasos y muñecas vendidos en el último pedido y
calcule el peso total del paquete que será enviado.

10. Una panadería vende barras de pan a 3.49€ cada una. El pan que no es el día tiene un descuento del
60%. Escribir un programa que comience leyendo el número de barras vendidas que no son del día.
Después el programa debe mostrar el precio habitual de una barra de pan, el descuento que se le hace
por no ser fresca y el coste final total. */

//Ejercicio 1

alert("Hola Mundo")
console.log("Hola Mundo")

//Ejercicio 2

let holaMundo = "Hola Mundo"
console.log(holaMundo)

//Ejercicio 3

let nombre = prompt("Ingrese su nombre")
console.log("Hola " + nombre)

//Ejercicio 6

let peso = parseInt(prompt("Ingrese su peso en numeros"))
let estatura = parseFloat(prompt("Ingrese su estatura en m"))
let imc =  peso / (estatura*estatura)
console.log(imc)
