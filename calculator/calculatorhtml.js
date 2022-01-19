let primerNumero;
let segundoNumero;
// let tipoOperacion;

const resultadoAnterior = document.getElementById("resultadoAnterior");
const resultadoActual = document.getElementById("resultadoActual");
const borrar = document.getElementById("borrar");
const atras = document.getElementById("atras");
const suma = document.getElementById("suma");
const resta = document.getElementById("resta");
const multiplicar = document.getElementById("multiplicar");
const dividir = document.getElementById("dividir");
const uno = document.getElementById("uno");
const dos = document.getElementById("dos");
const tres = document.getElementById("tres");
const cuatro = document.getElementById("cuatro");
const cinco = document.getElementById("cinco");
const seis = document.getElementById("seis");
const siete = document.getElementById("siete");
const ocho = document.getElementById("ocho");
const nueve = document.getElementById("nueve");
const cero = document.getElementById("cero");
const coma = document.getElementById("coma");
const igual = document.getElementById("igual");

let tipoOperacion;

function sumar(x, y) {
  return parseFloat(x) + parseFloat(y);
}

function restar(x, y) {
  return parseFloat(x) - parseFloat(y);
}

function multiplicacion(x, y) {
  return x * y;
}

function division(x, y) {
  return x / y;
}

uno.addEventListener("click", () => {
  resultadoActual.textContent += "1";
});

dos.addEventListener("click", () => {
  resultadoActual.textContent += "2";
});

tres.addEventListener("click", () => {
  resultadoActual.textContent += "3";
});

cuatro.addEventListener("click", () => {
  resultadoActual.textContent += "4";
});

cinco.addEventListener("click", () => {
  resultadoActual.textContent += "5";
});

seis.addEventListener("click", () => {
  resultadoActual.textContent += "6";
});

siete.addEventListener("click", () => {
  resultadoActual.textContent += "7";
});

ocho.addEventListener("click", () => {
  resultadoActual.textContent += "8";
});

nueve.addEventListener("click", () => {
  resultadoActual.textContent += "9";
});

cero.addEventListener("click", () => {
  resultadoActual.textContent += "0";
});

coma.addEventListener("click", () => {
  resultadoActual.textContent += ".";
});

suma.addEventListener("click", () => {
  if (tipoOperacion === "suma") {
    segundoNumero = parseFloat(resultadoActual.textContent);
    resultadoAnterior.textContent = `${sumar(primerNumero, segundoNumero)}+`;
    primerNumero = sumar(primerNumero, segundoNumero);
    resultadoActual.textContent = "";
  } else {
    primerNumero = parseFloat(resultadoActual.textContent);

    tipoOperacion = "suma";
    resultadoAnterior.textContent = `${
      resultadoAnterior.textContent + resultadoActual.textContent
    }+`;
    resultadoActual.textContent = "";
  }
});

resta.addEventListener("click", () => {
  if (tipoOperacion === "resta") {
    segundoNumero = parseFloat(resultadoActual.textContent);
    resultadoAnterior.textContent = `${restar(primerNumero, segundoNumero)}``-`;
    primerNumero = restar(primerNumero, segundoNumero);
    resultadoActual.textContent = "";
  } else {
    primerNumero = parseFloat(resultadoActual.textContent);
    tipoOperacion = "resta";
    resultadoAnterior.textContent = `${
      resultadoAnterior.textContent + resultadoActual.textContent
    }``-
        `;
    resultadoActual.textContent = "";
  }
});

multiplicar.addEventListener("click", () => {
  if (tipoOperacion === "multiplicacion") {
    segundoNumero = parseFloat(resultadoActual.textContent);
    resultadoAnterior.textContent = `${multiplicacion(
      primerNumero,
      segundoNumero
    )} ``*`;
    primerNumero = multiplicacion(primerNumero, segundoNumero);
    resultadoActual.textContent = "";
  } else {
    primerNumero = parseFloat(resultadoActual.textContent);
    tipoOperacion = "multiplicacion";
    resultadoAnterior.textContent = `${
      resultadoAnterior.textContent + resultadoActual.textContent
    } ``*`;
    resultadoActual.textContent = "";
  }
});

dividir.addEventListener("click", () => {
  if (tipoOperacion === "division") {
    segundoNumero = parseFloat(resultadoActual.textContent);
    resultadoAnterior.textContent = `${division(
      primerNumero,
      segundoNumero
    )} ``/`;
    primerNumero = division(primerNumero, segundoNumero);
    resultadoActual.textContent = "";
  } else {
    primerNumero = parseFloat(resultadoActual.textContent);
    tipoOperacion = "division";
    resultadoAnterior.textContent = `${
      resultadoAnterior.textContent + resultadoActual.textContent
    } ``/`;
    resultadoActual.textContent = "";
  }
});

function limpiar() {
  resultadoAnterior.textContent = "";
  resultadoActual.textContent = "";
  tipoOperacion = undefined;
  primerNumero = undefined;
  segundoNumero = undefined;
}

function borrarActual() {
  resultadoActual.textContent = "";
}

function calcular() {
  switch (tipoOperacion) {
    case "suma":
      segundoNumero = parseFloat(resultadoActual.textContent);
      resultadoActual.textContent = sumar(primerNumero, segundoNumero);

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
    default:
      console.log("no hay operación");
  }
}

igual.addEventListener("click", () => {
  calcular();
});

borrar.addEventListener("click", () => {
  limpiar();
});
atras.addEventListener("click", () => {
  borrarActual();
});
