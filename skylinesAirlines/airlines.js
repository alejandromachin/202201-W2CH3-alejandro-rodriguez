

// VUELOS

let flights = [

    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },

    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },

    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },

    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },

    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },

    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },

    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },

    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },

    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },

    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } ];


function skylabAirlines() {

let nombreUsuario = prompt("Hola, cuál es tu nombre?");

alert(`Hola ${nombreUsuario}, aquí tienes un listado de los vuelos de hoy:`);


flights.forEach(function(vuelo) {
if (vuelo.scale === false) {
console.log(`Desde ${vuelo.from} hasta ${vuelo.to} con un precio de ${vuelo.cost}€, sin escala`)

}
if (vuelo.scale === true) {
    console.log(`Desde ${vuelo.from} hasta ${vuelo.to} con un precio de ${vuelo.cost}€, con escala`)

}
});

let precios = flights.map(function (vuelo) {
    return vuelo.cost;
});

// precio medio vuelos

function suma(...n) {

    let sum = 0;
    let i;
    for(i=0; i<(precios.length); i++) {

        sum += precios[i];
    }
return sum;

  };


let totalPrecios = suma ();

let mediaPrecios = (totalPrecios / precios.length)

console.log(`El precio medio de los vuelos de hoy es ${Math.round(mediaPrecios)}€`);

// cuantos vuelos hacen escala

let vuelosEscala = [];

flights.forEach(function(vuelo) {
    
    
    if (vuelo.scale === true) {
        vuelosEscala.push(vuelo);
    }
    });

    console.log(`Hay ${vuelosEscala.length} vuelos con escala el día de hoy`);

    // console.table(flights);

    // console.table(flights.to);

let destinos = flights.map(function (vuelo) {

    return vuelo.to;


});
console.log("Los destinos de los últimos 5 vuelos de hoy son:")
for (i = destinos.length-1; i>5; i--) {
    
    console.log(destinos[i]);

};


};



skylabAirlines();

