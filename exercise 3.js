/*
Desarrolle un algoritmo para el cálculo del salario de un trabajador. 
El importe liquidado (sueldo) depende de una tarifa o precio por hora establecida y de un condicionante sobre las horas trabajadas: 
si la cantidad de horas trabajadas es mayor a 40 horas, la tarifa se incrementa en un 50% para las horas extras. 
Calcular el sueldo recibido por el trabajador en base las horas trabajadas y la tarifa. 
Utilice las instrucciones LEER HORASTRABAJADAS y LEER TARIFA al inicio del programa para cargar los valores en las variables 
HORASTRABAJADAS y TARIFA.*/

export const salary = () => {
  if (workedHours <= 40) {
    salaryOfWorker = salaryPerHour * workedHours;
  } else if (workedHours >= 41) {
    additionalHours = workedHours - 40;
    salaryOfWorker = (additionalHours * 50) / 100 + salaryPerHour * workedHours;
  }
  return salaryOfWorker;
};

let salaryPerHour = Math.floor(Math.random() * 20);
let workedHours = Math.floor(Math.random() * 96);
let salaryOfWorker = 0;
let additionalHours = 0;

salary();

console.log(`El trabajador gana ${salaryPerHour} euros la hora`);
console.log(`La persona trabajó ${workedHours} horas en la semana`);
console.log(`La persona ganó ${salaryOfWorker} euros por la semana de trabajo`);