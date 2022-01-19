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

function skylabAirlinesPro() {
  prompt("Hola, cuál es tu nombre?");

  // SOLICITUD DE ADMIN O NO
  function agregarVuelo() {
    const nuevoVuelo = {};
    nuevoVuelo.id = flights.length;
    const toNuevo = prompt("Introduce el destino");
    nuevoVuelo.to = toNuevo;
    const fromNuevo = prompt("Introduce la procedencia");
    nuevoVuelo.from = fromNuevo;
    const costNuevo = prompt("Introduce el coste");
    nuevoVuelo.cost = costNuevo;
    let scaleNuevo = prompt("Tiene escala?", "SI,NO");
    if (scaleNuevo.toLowerCase() === "si") {
      scaleNuevo = true;
      nuevoVuelo.scale = scaleNuevo;
    } else {
      scaleNuevo = false;
      nuevoVuelo.scale = scaleNuevo;
    }

    flights.push(nuevoVuelo);
  }

  function eliminarVuelo() {
    console.log("aquí tienes el listado de los vuelvos actuales");
    console.table(flights);

    const idEliminarVuelo = parseFloat(
      prompt("Introduce el ID del vuelo que desees eliminar")
    );
    flights.splice(idEliminarVuelo.toFixed(1), 1);
  }

  function comprarVuelo() {
    const buscarPrecio = prompt(
      "Si quieres comprar un vuelo, introduce el precio máximo que deseas pagar, de lo contrario pulsa cancelar para ver el listado de hoy"
    );

    if (buscarPrecio === null) {
      console.log("Aquí tienes un listado de los vuelos de hoy:");

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

      const destinos = flights.map((vuelo) => vuelo.to);
      console.log("Los destinos de los últimos 5 vuelos de hoy son:");
      for (let i = destinos.length - 1; i > 5; i--) {
        console.log(destinos[i]);
      }
    } else {
      console.log(
        "Aquí tienes una lista de los vuelos en tu rango de precios:"
      );
      flights.forEach((vuelo) => {
        if (vuelo.cost < buscarPrecio) {
          console.log(
            `el vuelo con ID ${vuelo.id} de ${vuelo.from} a ${vuelo.to} por ${vuelo.cost}€`
          );
        }
      });

      const vueloComprado = prompt(
        "Introduce el ID del vuelo que deseas comprar"
      );

      console.log(
        `Gracias por comprar con nosotros, buen viaje a ${flights[vueloComprado].to}`
      );
    }
  }

  const login = prompt(
    "Hola, si eres administrador escribe ADMIN, de lo contrario escribe USER",
    "ADMIN/USER"
  );

  if (login === null) {
    alert("ADIÓS!");
  }

  if (login.toLowerCase() === "admin") {
    const queQuieresHacer = prompt(
      "Qué deseas hacer?",
      "AGREGAR VUELO, ELIMINAR VUELO, VER VUELOS"
    );

    if (queQuieresHacer.toLowerCase() === "agregar vuelo") {
      if (flights.length < 17) {
        agregarVuelo();

        console.log("Aquí tienes un listado de los vuelos actuales");
        console.table(flights);
      } else {
        alert(
          "El listado ya contiene el máximo de 15 vuelos, por favor elimina uno antes de añadir otro"
        );
      }
    }
    if (queQuieresHacer.toLowerCase() === "eliminar vuelo") {
      eliminarVuelo();
    }

    if (queQuieresHacer.toLowerCase() === "ver vuelos") {
      console.table(flights);
    }
  }

  if (login.toLowerCase() === "user") {
    comprarVuelo();
  }
}

skylabAirlinesPro();
