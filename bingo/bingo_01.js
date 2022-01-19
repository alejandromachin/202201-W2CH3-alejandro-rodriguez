


let carton1 = [
    {numero: 3, matched: false},
    {numero: 4, matched: false},
    {numero: 7, matched: false},
    {numero: 1, matched: false},
    {numero: 2, matched: false},
   ];
let carton2 = [
    {numero: 5, matched: false},
    {numero: 1, matched: false},
    {numero: 6, matched: false},
    {numero: 3, matched: false},
    {numero: 8, matched: false},
   ];
let carton3 = [
    {numero: 8, matched: false},
    {numero: 9, matched: false},
    {numero: 3, matched: false},
    {numero: 1, matched: false},
    {numero: 2, matched: false},
   ];
let carton4 = [
    {numero: 5, matched: false},
    {numero: 2, matched: false},
    {numero: 6, matched: false},
    {numero: 1, matched: false},
    {numero: 9, matched: false},
   ];
let carton5 = [
    {numero: 4, matched: false},
    {numero: 1, matched: false},
    {numero: 2, matched: false},
    {numero: 8, matched: false},
    {numero: 9, matched: false},
   ];



function bingo() {


//petición de nombre de jugador

// let nombreJugador = prompt("Bienvenido al BINGO! Cuál es tu nombre?");

// funciones 

    function seleccionCarton() {

        console.table(carton1);

        let estasDeAcuerdo = prompt("Te gusta este cartón?","SI, NO");

        if (estasDeAcuerdo.toLowerCase() == "no") {

            

        }

    };

    function numeroAleatorio(max) {

        max = 10;

        return Math.floor((Math.random() * max) + 1); // +1 previene que se genere el 0

      };

    function nuevoTurno() {

  
        let siguienteTurno = prompt("Quieres otro número?", "SI,NO");

        if (siguienteTurno  == null) {  
    
    
        alert("Hasta pronto!")

        };
    
        if (siguienteTurno.toLowerCase()  == "si") {
    
            bingo()
    
    
        };
    
    
        if (siguienteTurno.toLowerCase()  == "no") {
    
    
        alert("Hasta pronto!")
    
    
        };
    }

    
let carton = seleccionCarton();
let numeroRandom = numeroAleatorio()

console.log(`El número es ${numeroRandom}`);

// let carton1Array = Object.values(carton1);

let carton1checked = carton1.map(function(numero) {


    if (numero.numero == numeroRandom) {
    
        numero.matched = true;



    }
    if (numero.matched == true) {

        numero.numero = "X"; };
  
return numero;

}
    
    );

carton1checked.forEach(function(numero) {

    console.table(numero.numero);
})

if (carton1checked[0].numero == "X" && carton1checked[1].numero == "X" && carton1checked[2].numero == "X" && carton1checked[3].numero == "X" && carton1checked[4].numero == "X") {

alert("HAS GANADO!");

}
else {

nuevoTurno();


}

}

bingo();
