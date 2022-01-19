
function bingoPro (){



// jugadores

class Jugador {
    constructor (nombre, puntuacion){

        this.nombre = nombre;
        this.puntuacion = puntuacion;
    }


};


let jugador1 = new Jugador("Esteban Quito", 5000);
let jugador2 = new Jugador("Alan Brito", 200);
let jugador3 = new Jugador("Aitor Menta", 4500);
let jugador4 = new Jugador("Elsa Pito", 3000);
let jugador5 = new Jugador("Ana Conda", 2900);


console.log("El ranking actual de jugadores es:")

console.log(` ${jugador1.nombre} con ${jugador1.puntuacion} puntos`)
console.log(` ${jugador2.nombre} con ${jugador2.puntuacion} puntos`)
console.log(` ${jugador3.nombre} con ${jugador3.puntuacion} puntos`)
console.log(` ${jugador4.nombre} con ${jugador4.puntuacion} puntos`)
console.log(` ${jugador5.nombre} con ${jugador5.puntuacion} puntos`)



let numeros = [];
function generarNumeroRandom () {



let max = 30;

let numeroRandom = Math.floor((Math.random() * max) + 1);

if (numeros.includes(numeroRandom) == true) {

    generarNumeroRandom();

}

else {

    numeros.push(numeroRandom);
   
    console.log(`El número obtenido es ${numeroRandom}`)
   
   
};


return numeroRandom;
};



function generarCartonRandom () {

let cantidadNumeros = 15;
let myArray = []

while(myArray.length < cantidadNumeros ){
  let numeroAleatorio = Math.floor(Math.random()*30+1);
  let existe = false;
  for(let i=0;i<myArray.length;i++){
	if(myArray [i] == numeroAleatorio){
        existe = true;
        break;
    }
  }
  if(!existe){
    myArray[myArray.length] = numeroAleatorio;
  };
};

let linea1 = [];
for (let k=0; k<5; k++) {


linea1.push(myArray[k]);


};


let linea2 = [];
for (let k=5; k<10; k++) {


linea2.push(myArray[k]);


};


let linea3 = [];
for (let k=10; k<15; k++) {


linea3.push(myArray[k]);


};


let carton = [linea1, linea2, linea3];




return carton;


};



function teGustaElCarton(){
    let confirmarCarton = prompt("Te gusta este cartón?", "YES, OTRO");
    
    if (confirmarCarton.toLowerCase() == "yes") {
    
    alert("Perfecto, a jugar!")
    turno();
    
    };
    
    if (confirmarCarton.toLowerCase() == "otro") {
    
    generarCartonRandom();
    teGustaElCarton();
    };
    };

// let cartonCheckedPro = [];

function turno(){

    let otroTurno = window.confirm("Sacamos un número?");

    if (otroTurno == true) {

        let numeroRandomPrueba = generarNumeroRandom ();

        return cartonRandomPrueba.map(function(elemento) {
        
 
           return elemento.map(function(numero) {

            
            if (numero == numeroRandomPrueba) {

                    numero = "X";

            }
           
            return numero;
        });

        
    });
   
    
};

    if (otroTurno == false) {

        alert("Ok, hasta la próxima!")
    }
;
};


let cartonRandomPrueba = generarCartonRandom();
console.table(cartonRandomPrueba);


teGustaElCarton();

let variable = turno();
console.table(variable);

// console.table(carton);

// let cartonCheckedPro = turno();
// let carton1 = cartonCheckedProReturn;
// console.log(carton1);

// console.table(cartonCheckedPro);
};


bingoPro();








// for (i=0; i=5; i++) {

//     linea1.push(myArray[i]);

// };

// for (i=6; i=10; i++) {

//     linea2.push(myArray[i]);

// };

// for (i=11; i=15; i++) {

//     linea3.push(myArray[i]);

// };

// console.table(myArray);
// console.table(carton1);




// }

// function GenerarNumero(){
// for(i=0; i=15; i++) {

//     let numero = numeroAleatorio(15)

//     if (linea1.includes(numero) == true, linea2.includes(numero) == true, linea3.includes(numero) == true) {

//         GenerarNumero();

//     }

//     else {



//     }



    


// }

// var n = 0;
// var numero;
// var uno = 0;
// var dos = 0;
// var tres = 0;
// do {
//     numero = Math.floor((Math.random() * 50) + 1);
//     if ((numero != uno) && (numero != dos) && (numero != 3)) {
//         document.write(numero + "<br>");
//         n++;
//         if (n == 1) {
//             uno = numero;
//         }
//         if (n == 2) {
//             dos = numero;
//         }
//         if (n == 3) {
//             tres = numero;
//         }
//     }
// } 
// while (n < 3);







// function bingo() {


// //petición de nombre de jugador

// // let nombreJugador = prompt("Bienvenido al BINGO! Cuál es tu nombre?");

// // funciones 

//     function seleccionCarton() {

//         console.log(carton1);

//         let estasDeAcuerdo = prompt("Te gusta este cartón?","SI, NO");

//         if (estasDeAcuerdo.toLowerCase() == "no") {

            

//         }

//     };

//     function numeroAleatorio(max) {


//         return Math.floor((Math.random() * max) + 1); // +1 previene que se genere el 0

//       };

//     function nuevoTurno() {

  
//         let siguienteTurno = prompt("Quieres otro número?", "SI,NO");

//         if (siguienteTurno  == null) {  
    
    
//         alert("Hasta pronto!")

//         };
    
//         if (siguienteTurno.toLowerCase()  == "si") {
    
//             bingo()
    
    
//         };
    
    
//         if (siguienteTurno.toLowerCase()  == "no") {
    
    
//         alert("Hasta pronto!")
    
    
//         };
//     }

    

// let numeroRandomBombo = numeroAleatorio();
// let numeroRandom = numeroAleatorio();



// console.log(`El número es ${numeroRandomBombo}`);

// // let carton1Array = Object.values(carton1);

// let carton1checked = carton1.map(function(numero) {


//     if (numero.numero == numeroRandomBombo) {
    
//         numero.matched = true;



//     }
//     if (numero.matched == true) {

//         numero.numero = "X"; };
  
// return numero;

// }
    
//     );

// carton1checked.forEach(function(numero) {

//     console.table(numero.numero);
// })

// if (carton1checked[0].numero == "X" && carton1checked[1].numero == "X" && carton1checked[2].numero == "X" && carton1checked[3].numero == "X" && carton1checked[4].numero == "X") {

// alert("HAS GANADO!");

// }
// else {

// nuevoTurno();


// }

// // }

// bingo();


