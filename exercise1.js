const readNumber = () => {
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
