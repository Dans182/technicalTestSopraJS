  export const salary = () => {
    if (workedHours <= 40) {
      salaryOfWorker = salaryPerHour * workedHours;
    } else if (workedHours >= 41) {
      additionalHours = workedHours - 40;
      salaryOfWorker = (additionalHours * 50) / 100 + salaryPerHour * workedHours;
    }
    return salaryOfWorker;
  };
  
  let salaryPerHour = Math.floor(Math.random()*20);
  let workedHours = Math.floor(Math.random()*96);
  let salaryOfWorker = 0;
  let additionalHours = 0;
  
  salary();
  
  console.log(`El trabajador gana ${salaryPerHour} euros la hora`);
  console.log(`La persona trabajó ${workedHours} horas en la semana`);
  console.log(`La persona ganó ${salaryOfWorker} euros por la semana de trabajo`)