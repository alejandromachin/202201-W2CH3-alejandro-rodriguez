// VUELOS

const flights = [
  { id: 0, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },

  { id: 1, to: "New York", from: "Barcelona", cost: 700, scale: false },

  { id: 2, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },

  { id: 3, to: "Paris", from: "Barcelona", cost: 210, scale: false },

  { id: 4, to: "Roma", from: "Barcelona", cost: 150, scale: false },

  { id: 5, to: "London", from: "Madrid", cost: 200, scale: false },

  { id: 6, to: "Madrid", from: "Barcelona", cost: 90, scale: false },

  { id: 7, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },

  { id: 8, to: "Shangai", from: "Barcelona", cost: 800, scale: true },

  { id: 9, to: "Sydney", from: "Barcelona", cost: 150, scale: true },

  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

function skylabAirlines() {
  const nombreUsuario = prompt("Hola, cuál es tu nombre?");

  alert(`Hola ${nombreUsuario}, aquí tienes un listado de los vuelos de hoy:`);

  flights.forEach((vuelo) => {
    if (vuelo.scale === false) {
      console.log(
        `Desde ${vuelo.from} hasta ${vuelo.to} con un precio de ${vuelo.cost}€, sin escala`
      );
    }
    if (vuelo.scale === true) {
      console.log(
        `Desde ${vuelo.from} hasta ${vuelo.to} con un precio de ${vuelo.cost}€, con escala`
      );
    }
  });

  const precios = flights.map((vuelo) => vuelo.cost);

  // precio medio vuelos

  function suma() {
    let sum = 0;
    let i;
    for (i = 0; i < precios.length; i++) {
      sum += precios[i];
    }
    return sum;
  }

  const totalPrecios = suma();

  const mediaPrecios = totalPrecios / precios.length;

  console.log(
    `El precio medio de los vuelos de hoy es ${Math.round(mediaPrecios)}€`
  );

  // cuantos vuelos hacen escala

  const vuelosEscala = [];

  flights.forEach((vuelo) => {
    if (vuelo.scale === true) {
      vuelosEscala.push(vuelo);
    }
  });

  console.log(`Hay ${vuelosEscala.length} vuelos con escala el día de hoy`);

  // console.table(flights);

  // console.table(flights.to);

  const destinos = flights.map((vuelo) => vuelo.to);
  console.log("Los destinos de los últimos 5 vuelos de hoy son:");
  for (let i = destinos.length - 1; i > 5; i--) {
    console.log(destinos[i]);
  }
}

skylabAirlines();
