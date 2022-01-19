function bingo() {
  class Jugador {
    constructor(nombre, puntuacion) {
      this.nombre = nombre;
      this.puntuacion = puntuacion;
    }
  }

  const jugador1 = new Jugador("Esteban Quito", 5000);
  const jugador2 = new Jugador("Alan Brito", 200);
  const jugador3 = new Jugador("Aitor Menta", 4500);
  const jugador4 = new Jugador("Elsa Pito", 3000);
  const jugador5 = new Jugador("Ana Conda", 2900);

  const playerNombre = prompt("Introduce tu nombre de jugador");
  const puntuacionInicial = 7000;

  const ranking = [];

  ranking.push(jugador1);
  ranking.push(jugador2);
  ranking.push(jugador3);
  ranking.push(jugador4);
  ranking.push(jugador5);

  let cantidadNumeros = 30;
  let myArray = [];

  function generarNumeroRandom() {
    while (myArray.length < cantidadNumeros) {
      const numeroRandom = Math.ceil(Math.random() * cantidadNumeros);
      let existe = false;
      for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] === numeroRandom) {
          existe = true;
          break;
        }
      }
      if (!existe) {
        myArray[myArray.length] = numeroRandom;
        console.log(`El número obtenido es ${numeroRandom}`);

        return numeroRandom;
      }
    }

    return new Error("error");
  }

  function generarCartonRandom() {
    cantidadNumeros = 15;
    myArray = [];

    while (myArray.length < cantidadNumeros) {
      const numeroAleatorio = Math.floor(Math.random() * 30 + 1);
      let existe = false;
      for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] === numeroAleatorio) {
          existe = true;
          break;
        }
      }
      if (!existe) {
        myArray[myArray.length] = numeroAleatorio;
      }
    }

    const linea1 = myArray.slice(0, 5);
    const linea2 = myArray.slice(5, 10);
    const linea3 = myArray.slice(10, 15);
    const carton = [linea1, linea2, linea3];

    console.table(carton);

    const confirmarCarton = prompt("Te gusta este cartón?", "YES, OTRO");

    if (confirmarCarton.toLowerCase() === "yes") {
      alert("Perfecto, a jugar!");
    }

    if (confirmarCarton.toLowerCase() === "otro") {
      return generarCartonRandom();
    }
    return carton;
  }

  const numeroTurnos = [];

  const carton = generarCartonRandom();

  function turno() {
    const otroTurno = window.confirm("Sacamos un número?");

    if (otroTurno === true) {
      const numeroRandom = generarNumeroRandom();

      for (let i = 0; i < carton.length; i++) {
        for (let j = 0; j < carton[i].length; j++) {
          if (carton[i][j] === numeroRandom) {
            carton[i][j] = "X";
          }
        }
      }
      numeroTurnos.push(numeroRandom);
      return carton;
    }

    if (otroTurno === false) {
      alert("Ok, hasta la próxima!");
    }
    return new Error("error");
  }

  for (let i = 0; i < 100; i++) {
    const cartonChecked = turno();

    console.table(cartonChecked);

    if (
      cartonChecked[0][0] === "X" &&
      cartonChecked[0][1] === "X" &&
      cartonChecked[0][2] === "X" &&
      cartonChecked[0][3] === "X" &&
      cartonChecked[0][4] === "X"
    ) {
      alert("LINEA!");

      break;
    } else if (
      cartonChecked[1][0] === "X" &&
      cartonChecked[1][1] === "X" &&
      cartonChecked[1][2] === "X" &&
      cartonChecked[1][3] === "X" &&
      cartonChecked[1][4] === "X"
    ) {
      alert("LINEA!");
      break;
    } else if (
      cartonChecked[2][0] === "X" &&
      cartonChecked[2][1] === "X" &&
      cartonChecked[2][2] === "X" &&
      cartonChecked[2][3] === "X" &&
      cartonChecked[2][4] === "X"
    ) {
      alert("LINEA!");
      break;
    }
  }

  for (let i = 0; i < 100; i++) {
    let cartonChecked;
    if (
      cartonChecked[0][0] === "X" &&
      cartonChecked[0][1] === "X" &&
      cartonChecked[0][2] === "X" &&
      cartonChecked[0][3] === "X" &&
      cartonChecked[0][4] === "X" &&
      cartonChecked[1][0] === "X" &&
      cartonChecked[1][1] === "X" &&
      cartonChecked[1][2] === "X" &&
      cartonChecked[1][3] === "X" &&
      cartonChecked[1][4] === "X" &&
      cartonChecked[2][0] === "X" &&
      cartonChecked[2][1] === "X" &&
      cartonChecked[2][2] === "X" &&
      cartonChecked[2][3] === "X" &&
      cartonChecked[2][4] === "X"
    ) {
      alert("BINGO!");
      break;
    } else {
      cartonChecked = turno();

      console.table(cartonChecked);
    }
  }

  console.log(`Has completado el cartón en ${numeroTurnos.length} turnos! `);
  const puntuacionFinal = puntuacionInicial - numeroTurnos.length * 100;

  const player = new Jugador(playerNombre, puntuacionFinal);

  ranking.push(player);

  ranking.sort((a, b) => {
    if (a.puntuacion < b.puntuacion) {
      return 1;
    }
    if (a.puntuacion > b.puntuacion) {
      return -1;
    }

    return 0;
  });

  console.log(
    `Enhorabuena ${playerNombre}, tu puntuación es ${puntuacionFinal} y éste es ranking actual de jugadores:`
  );

  ranking.forEach((jugador) => {
    console.log(`${jugador.nombre} con ${jugador.puntuacion} puntos`);
  });
}

bingo();
