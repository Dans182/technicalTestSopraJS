/*
Escriba un algoritmo que lea un número entero y determine si es par o impar. 
Si es par, que escriba todos los pares de manera descendiente desde sí mismo y hasta el cero. 
Si es impar, que escriba todos los impares de manera descendiente desde si sí mismo hasta el uno. 
Utilice la instrucción LEER NUMERO al inicio del programa para cargar un número en la variable NUMERO.
*/

export const readNumber = () => {
  let number = Math.floor(Math.random() * 100);
  if (number % 2 == 0) {
    for (let i = number; number >= 0; number = number - 2) {
      console.log(number);
    }
  } else {
    for (let i = number; number >= 0; number = number - 2) {
      console.log(number);
    }
  }
};
readNumber();