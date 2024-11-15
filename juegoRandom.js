let randomCards = [];

const randomNumber = () => {
  return Math.floor(Math.random() * 101);
};

function createDeck(array) {
  let random;

  do {
    random = randomNumber();
    if (!array.includes(random)) {
      array.push(random);
    }
  } while (array.length < 50);

  for (const numero of array) {
    console.log(numero);
  }
}

function picktwoNumbers(array) {
  let i = Math.floor(Math.random() * array.length);
  let r = array[i];
  return r;
}

createDeck(randomCards);

let number1 = picktwoNumbers(randomCards);
let number2 = picktwoNumbers(randomCards);

if (number1 < number2) {
  console.log(`Player2 had the highest number: ${number2}`);
  console.log(`Player1 lost: ${number1}`);
} else if (number1 > number2) {
  console.log(`Player1 had the highest number: ${number1}`);
  console.log(`Player2 lost: ${number2}`);
} else {
  console.log("Draw");
}
