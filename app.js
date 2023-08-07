// Funciones de operaciones matemáticas

const suma = function (primerNum, segundoNum) {
    return Number(primerNum) + Number(segundoNum);
};

const resta = function (primerNum, segundoNum) {
    return Number(primerNum) - Number(segundoNum);
};

const multiplicación = function (primerNum, segundoNum) {
    return Number(primerNum) * Number(segundoNum);
};

const división = function (primerNum, segundoNum) {
    if (Number(segundoNum) === 0){
        return console.error("Operación indefinida");
    }
    return Number(primerNum) / Number(segundoNum);
};

const porcentaje = function (primerNum, segundoNum) {
    return (Number(primerNum) * Number(segundoNum)) / 100;
};

const exponenciación = function(primerNum, segundoNum) {
    let resultado = 1;
    for(let i = 1; i <= Number(segundoNum); i++){
        resultado *= Number(primerNum);
    }
    return resultado;
};

const divisiónModular = function(primerNum, segundoNum) {
    return Number(primerNum) % Number(segundoNum);
};

// Variables para operaciones
let primerNum;
let operador;
let segundoNum;

// Función de llamada a operaciones
function operate(primerNum, operador, segundoNum){
    switch (operador) {
        case "+":
            return suma(primerNum, segundoNum);
    
        case "-":
            return resta(primerNum, segundoNum);
        
        case "x" || "X":
            return multiplicación(primerNum, segundoNum);
        
        case "/":
            return división(primerNum, segundoNum);

        case "%":
            return porcentaje(primerNum, segundoNum);

        case "^":
            return exponenciación(primerNum, segundoNum);

        case "mod":
            return divisiónModular(primerNum, segundoNum);

        default:
            return console.error("Operación no valida");
    }
}

// Variables de control
const pantalla = document.getElementById("operacion");
const botonCero = document.getElementById("cero");
const botonUno = document.getElementById("uno");
const botonDos = document.getElementById("dos");
const botonTres = document.getElementById("tres");
const botonCuatro = document.getElementById("cuatro");
const botonCinco = document.getElementById("cinco");
const botonSeis = document.getElementById("seis");
const botonSiete = document.getElementById("siete");
const botonOcho = document.getElementById("ocho");
const botonNueve = document.getElementById("nueve");
const botonPunto = document.getElementById("punto");
let arrPantalla = [];

// Variables de operaciones
const botonSuma = document.getElementById("suma");
const botonResta = document.getElementById("resta");
const botonMultiplicacion = document.getElementById("multiplicación");
const botonDivision = document.getElementById("división");
const botonExponenciacion = document.getElementById("exponenciación");
const botonPorcentaje = document.getElementById("porcentaje");
const botonModulo = document.getElementById("modulo");
const botonResultado = document.getElementById("resultado");

// Variables para borrar
const del = document.getElementById("borrar");
const c = document.getElementById("limpiar");

// Agregar el valor del botón en la pantalla
botonCero.addEventListener("click", (e) => {
    pantalla.innerText += 0;
});

botonUno.addEventListener("click", (e) => {
    pantalla.innerText += 1;
});

botonDos.addEventListener("click", (e) => {
    pantalla.innerText += 2;
});

botonTres.addEventListener("click", (e) => {
    pantalla.innerText += 3;
});

botonCuatro.addEventListener("click", (e) => {
    pantalla.innerText += 4;
});

botonCinco.addEventListener("click", (e) => {
    pantalla.innerText += 5;
});

botonSeis.addEventListener("click", (e) => {
    pantalla.innerText += 6;
});

botonSiete.addEventListener("click", (e) => {
    pantalla.innerText += 7;
});

botonOcho.addEventListener("click", (e) => {
    pantalla.innerText += 8;
});

botonNueve.addEventListener("click", (e) => {
    pantalla.innerText += 9;
});

botonPunto.addEventListener("click", (e) => {
    if (arrPantalla.some(arreglo => arreglo.includes("."))){
        return;
    }else{
        pantalla.innerText += ".";
        arrPantalla.push(".");
    }
});

// Agregar el valor del operador
botonSuma.addEventListener("click", (e) => {
    if (arrPantalla.some(arreglo => arreglo == ("+") || ("-") || ("X") || ("/") || ("%") || ("^") || ("mod"))){
        return;
    }else{
        arrPantalla.unshift("+");
        pantalla.innerText += "+";
    }
});

botonResta.addEventListener("click", (e) => {
    if (arrPantalla.some(arreglo => arreglo == ("+") || ("-") || ("X") || ("/") || ("%") || ("^") || ("mod"))){
        return;
    }else{
        arrPantalla.unshift("-");
        pantalla.innerText += "-";
    }
});

botonMultiplicacion.addEventListener("click", (e) => {
    if (arrPantalla.some(arreglo => arreglo == ("+") || ("-") || ("X") || ("/") || ("%") || ("^") || ("mod"))){
        return;
    }else{
        pantalla.innerText += "X";
        arrPantalla.push("X");
    }
});

botonDivision.addEventListener("click", (e) => {
    if (arrPantalla.some(arreglo => arreglo == ("+") || ("-") || ("X") || ("/") || ("%") || ("^") || ("mod"))){
        return;
    }else{
        pantalla.innerText += "/";
        arrPantalla.push("/");
    }
});

botonExponenciacion.addEventListener("click", (e) => {
    if (arrPantalla.some(arreglo => arreglo == ("+") || ("-") || ("X") || ("/") || ("%") || ("^") || ("mod"))){
        return;
    }else{
        pantalla.innerText += "^";
        arrPantalla.push("^");
    }
});

botonPorcentaje.addEventListener("click", (e) => {
    if (arrPantalla.some(arreglo => arreglo == ("+") || ("-") || ("X") || ("/") || ("%") || ("^") || ("mod"))){
        return;
    }else{
        pantalla.innerText += "%";
        arrPantalla.push("%");
    }
});

botonModulo.addEventListener("click", (e) => {
    if (arrPantalla.some(arreglo => arreglo == ("+") || ("-") || ("X") || ("/") || ("%") || ("^") || ("mod"))){
        return;
    }else{
        pantalla.innerText += "mod";
        arrPantalla.push("mod");
    }
});

botonResultado.addEventListener("click", (e) => {
    if (arrPantalla.some(arreglo => arreglo.includes("="))){
        return;
    }else{
        pantalla.innerText += "=";
        arrPantalla.push("=");
    }
});
