let cartasAleatorias = [];

const numeroAleatorio = () => {
  return Math.floor(Math.random() * 101);
};

function crearMazo(array) {
  let aleatorio;

  do {
    aleatorio = numeroAleatorio();
    if (!array.includes(aleatorio)) {
      array.push(aleatorio);
    }
  } while (array.length < 50);

  for (const numero of array) {
    console.log(numero);
  }
}

function elegirDosNumeros(array) {
  let i = Math.floor(Math.random() * array.length);
  let r = array[i];
  return r;
}

crearMazo(cartasAleatorias);

let numero1 = elegirDosNumeros(cartasAleatorias);
let numero2 = elegirDosNumeros(cartasAleatorias);

if (numero1 < numero2) {
  console.log(`Jugador 2 tiene el número más alto: ${numero2}`);
  console.log(`Jugador 1 perdió: ${numero1}`);
} else if (numero1 > numero2) {
  console.log(`Jugador 1 tiene el número más alto: ${numero1}`);
  console.log(`Jugador 2 perdió: ${numero2}`);
} else {
  console.log("Empate");
}
