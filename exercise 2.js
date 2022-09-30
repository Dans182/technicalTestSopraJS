/*
Escriba un algoritmo que visualice una clasificación de 50 personas según edad y sexo. Deberá mostrar los siguientes resultados:
    a. Cantidad de personas mayores de edad (18 años o más).
    b. Cantidad de personas menores de edad.
    c. Cantidad de personas masculinas mayores de edad.
    d. Cantidad de personas femeninas menores de edad.
    e. Porcentaje que representan las personas mayores de edad respecto al total de personas.
    f. Porcentaje que representan las mujeres respecto al total de personas.
Utilice la instrucción LEER PERSONAS al inicio del programa para cargar los datos de las 50 personas en un variable, PERSONAS, 
que actúa como un vector de 50 posiciones.
Cada elemento de PERSONAS es de un tipo estructurado que dispone dos campos:
SEXO y EDAD.
*/
export const readPeople = (randomPeople) => {
  let legalAge = 0;
  let minor = 0;
  let legalAgeMan = 0;
  let minorWoman = 0;
  let woman = 0;

  for (let i = 0; i < randomPeople.length; i++) {
    if (randomPeople[i].age >= 18) legalAge += 1;
  }
  for (let i = 0; i < randomPeople.length; i++) {
    if (randomPeople[i].age < 18) minor += 1;
  }
  for (let i = 0; i < randomPeople.length; i++) {
    if (randomPeople[i].age >= 18 && randomPeople[i].sex == "male")
      legalAgeMan += 1;
  }
  for (let i = 0; i < randomPeople.length; i++) {
    if (randomPeople[i].age < 18 && randomPeople[i].sex == "female")
      minorWoman += 1;
  }
  for (let i = 0; i < randomPeople.length; i++) {
    if (randomPeople[i].sex == "female") woman += 1;
  }
  console.log(randomPeople);
  console.log(`Hay ${legalAge} personas mayores de edad`);
  console.log(`Hay ${minor} personas menores de edad`);
  console.log(`Hay ${legalAgeMan} hombres mayores de edad`);
  console.log(`Hay ${minorWoman} mujeres menores de edad`);
  console.log(`El ${(legalAge / 50) * 100}% de las personas son mayores de edad`);
  console.log(
    `Las mujeres representan el ${(woman / 50) * 100}% del total de personas`
  );
};

let randomPeople = [];
for (let i = 1; i <= 50; i++) {
  let sex = ["male", "female"];
  let randomSex = sex[Math.floor(Math.random() * sex.length)];
  let randomAge = Math.floor(Math.random() * 100);
  let people = { sex: randomSex, age: randomAge };
  randomPeople.push(people);
}

readPeople(randomPeople);
