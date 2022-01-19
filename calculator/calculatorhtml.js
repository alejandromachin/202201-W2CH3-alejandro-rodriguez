var primerNumero;
var segundoNumero;
var tipoOperacion;

function calculadora (){


const resultadoAnterior = document.getElementById("resultadoAnterior")
const resultadoActual = document.getElementById("resultadoActual")
var borrar = document.getElementById("borrar")
var atras = document.getElementById("atras")
var suma = document.getElementById("suma")
var resta = document.getElementById("resta")
var multiplicar = document.getElementById("multiplicar")
var dividir = document.getElementById("dividir")
var uno = document.getElementById("uno")
var dos = document.getElementById("dos")
var tres = document.getElementById("tres")
var cuatro = document.getElementById("cuatro")
var cinco = document.getElementById("cinco")
var seis = document.getElementById("seis")
var siete = document.getElementById("siete")
var ocho = document.getElementById("ocho")
var nueve = document.getElementById("nueve")
var cero = document.getElementById("cero")
var coma = document.getElementById("coma")
var igual = document.getElementById("igual")

var tipoOperacion;

function sumar(x, y) {

    return parseFloat(x) + parseFloat(y);
};

function restar(x,y) {

    return parseFloat(x)-parseFloat(y);

};

function multiplicacion(x,y) {
    return x*y;

};

function division(x,y) {
    return x/y;

};

uno.addEventListener("click", function(){
resultadoActual.textContent = resultadoActual.textContent + "1";
});

dos.addEventListener("click", function(){
resultadoActual.textContent = resultadoActual.textContent + "2";
});

tres.addEventListener("click", function(){
resultadoActual.textContent = resultadoActual.textContent + "3";
});

cuatro.addEventListener("click", function(){
resultadoActual.textContent = resultadoActual.textContent + "4";
});

cinco.addEventListener("click", function(){
resultadoActual.textContent = resultadoActual.textContent + "5";
});

seis.addEventListener("click", function(){
resultadoActual.textContent = resultadoActual.textContent + "6";
});

siete.addEventListener("click", function(){
resultadoActual.textContent = resultadoActual.textContent + "7";
});

ocho.addEventListener("click", function(){
resultadoActual.textContent = resultadoActual.textContent + "8";
});

nueve.addEventListener("click", function(){
resultadoActual.textContent = resultadoActual.textContent + "9";
});

cero.addEventListener("click", function(){
resultadoActual.textContent = resultadoActual.textContent + "0";
});

coma.addEventListener("click", function(){
resultadoActual.textContent = resultadoActual.textContent + ".";
});

suma.addEventListener("click", function(){

 

    if (tipoOperacion === "suma"){
        segundoNumero = parseFloat(resultadoActual.textContent);
        resultadoAnterior.textContent = sumar(primerNumero, segundoNumero) + "+";
        primerNumero = sumar(primerNumero, segundoNumero);
        resultadoActual.textContent = "";
    }

    else{

    primerNumero = parseFloat(resultadoActual.textContent);
    console.log(primerNumero)
    tipoOperacion = "suma";
    resultadoAnterior.textContent = resultadoAnterior.textContent + resultadoActual.textContent + "+";
    resultadoActual.textContent = "";
    
    }
    });

resta.addEventListener("click", function(){

   

    if (tipoOperacion === "resta"){
        segundoNumero = parseFloat(resultadoActual.textContent);
        resultadoAnterior.textContent = restar(primerNumero, segundoNumero) + " " + "-";
        primerNumero = restar(primerNumero, segundoNumero);
        resultadoActual.textContent = "";
    

    }

    else{

    primerNumero = parseFloat(resultadoActual.textContent);
    tipoOperacion = "resta";
    resultadoAnterior.textContent = resultadoAnterior.textContent + resultadoActual.textContent + " " + "-";
    resultadoActual.textContent = "";
    
    }
    
});

multiplicar.addEventListener("click", function(){

   

    if (tipoOperacion === "multiplicacion"){
        segundoNumero = parseFloat(resultadoActual.textContent);
        resultadoAnterior.textContent = multiplicacion(primerNumero, segundoNumero) + " " + "*";
        primerNumero = multiplicacion(primerNumero, segundoNumero);
        resultadoActual.textContent = "";
    

    }

    else{

    primerNumero = parseFloat(resultadoActual.textContent);
    tipoOperacion = "multiplicacion";
    resultadoAnterior.textContent = resultadoAnterior.textContent + resultadoActual.textContent + " " + "*";
    resultadoActual.textContent = "";
    
    }
    
});

dividir.addEventListener("click", function(){

   

    if (tipoOperacion === "division"){
        segundoNumero = parseFloat(resultadoActual.textContent);
        resultadoAnterior.textContent = division(primerNumero, segundoNumero) + " " + "/";
        primerNumero = division(primerNumero, segundoNumero);
        resultadoActual.textContent = "";
    

    }

    else{

    primerNumero = parseFloat(resultadoActual.textContent);
    tipoOperacion = "division";
    resultadoAnterior.textContent = resultadoAnterior.textContent + resultadoActual.textContent + " " + "/";
    resultadoActual.textContent = "";
    
    }
    
});

igual.addEventListener("click", function(){

    calcular();


});

borrar.addEventListener("click", function(){

    limpiar();


});
atras.addEventListener("click", function(){

    borrarActual();


});

function limpiar() {

    resultadoAnterior.textContent = "";
    resultadoActual.textContent = "";
    tipoOperacion = undefined;
    var primerNumero 
    var segundoNumero

}

function borrarActual(){
    resultadoActual.textContent = "";


}

function calcular() {

    switch(tipoOperacion){

    
        case "suma":
            segundoNumero = parseFloat(resultadoActual.textContent);
            resultadoActual.textContent = sumar(primerNumero, segundoNumero);
            console.log(primerNumero)
            primerNumero = sumar(primerNumero, segundoNumero);
            resultadoAnterior.textContent = "";
            tipoOperacion = undefined;
            
            break;

        case "resta":
            segundoNumero = parseFloat(resultadoActual.textContent);
            resultadoActual.textContent = restar(primerNumero, segundoNumero);
            primerNumero = restar(primerNumero, segundoNumero);
            resultadoAnterior.textContent = "";
            tipoOperacion = undefined;
            break;
    
        case "multiplicacion":
            segundoNumero = parseFloat(resultadoActual.textContent);
            resultadoActual.textContent = multiplicacion(primerNumero, segundoNumero);
            primerNumero = multiplicacion(primerNumero, segundoNumero);
            resultadoAnterior.textContent = "";
            tipoOperacion = undefined;
            break;
            
        case "division":
            segundoNumero = parseFloat(resultadoActual.textContent);
            resultadoActual.textContent = division(primerNumero, segundoNumero);
            primerNumero = division(primerNumero, segundoNumero);
            resultadoAnterior.textContent = "";
            tipoOperacion = undefined;
            break;
    };
};



};


