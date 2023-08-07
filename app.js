// Funciones de operaciones matemáticas

const suma = function (primerNum, segundoNum) {
    return primerNum + segundoNum;
};

const resta = function (primerNum, segundoNum) {
    return primerNum - segundoNum;
};

const multiplicación = function (primerNum, segundoNum) {
    return primerNum * segundoNum;
};

const división = function (primerNum, segundoNum) {
    if (segundoNum === 0){
        return resultadoEnPantalla.innerText = "Valor infinito 🧐";
    }
    return primerNum / segundoNum;
};

const porcentaje = function (primerNum, segundoNum) {
    return (primerNum * segundoNum) / 100;
};

const exponenciación = function(primerNum, segundoNum) {
    let resultado = 1;
    for(let i = 1; i <= segundoNum; i++){
        resultado *= primerNum;
    }
    return resultado;
};

const divisiónModular = function(primerNum, segundoNum) {
    return primerNum % segundoNum;
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
        
        case "X":
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
let resultadoEnPantalla = document.getElementById("valor");
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
let puntos = [];

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
    if (puntos[0] != "." ){
        puntos.push(".");
        pantalla.innerText += ".";
    }else{
        return;
    }
});

// Agregar el valor del operador
botonSuma.addEventListener("click", (e) => {
    if (arrPantalla.some(arreglo => arreglo == ("+") || ("-") || ("X") || ("/") || ("%") || ("^") || ("mod"))){
        return;
    }else{
        primerNum = Number(pantalla.textContent);
        arrPantalla.push("+");
        pantalla.innerText += "+";
        operador = "+";
        puntos.pop();
    }
});

botonResta.addEventListener("click", (e) => {
    if (arrPantalla.some(arreglo => arreglo == ("+") || ("-") || ("X") || ("/") || ("%") || ("^") || ("mod"))){
        return;
    }else{
        primerNum = Number(pantalla.textContent);
        arrPantalla.push("-");
        pantalla.innerText += "-";
        operador = "-";
        puntos.pop();
    }
});

botonMultiplicacion.addEventListener("click", (e) => {
    if (arrPantalla.some(arreglo => arreglo == ("+") || ("-") || ("X") || ("/") || ("%") || ("^") || ("mod"))){
        return;
    }else{
        primerNum = Number(pantalla.textContent);
        pantalla.innerText += "X";
        arrPantalla.push("X");
        operador = "X";
        puntos.pop();
    }
});

botonDivision.addEventListener("click", (e) => {
    if (arrPantalla.some(arreglo => arreglo == ("+") || ("-") || ("X") || ("/") || ("%") || ("^") || ("mod"))){
        return;
    }else{
        primerNum = Number(pantalla.textContent);
        pantalla.innerText += "/";
        arrPantalla.push("/");
        operador = "/";
        puntos.pop();
    }
});

botonExponenciacion.addEventListener("click", (e) => {
    if (arrPantalla.some(arreglo => arreglo == ("+") || ("-") || ("X") || ("/") || ("%") || ("^") || ("mod"))){
        return;
    }else{
        primerNum = Number(pantalla.textContent);
        pantalla.innerText += "^";
        arrPantalla.push("^");
        operador = "^";
        puntos.pop();
    }
});

botonPorcentaje.addEventListener("click", (e) => {
    if (arrPantalla.some(arreglo => arreglo == ("+") || ("-") || ("X") || ("/") || ("%") || ("^") || ("mod"))){
        return;
    }else{
        primerNum = Number(pantalla.textContent);
        pantalla.innerText += "%";
        arrPantalla.push("%");
        operador = "%";
        puntos.pop();
    }
});

botonModulo.addEventListener("click", (e) => {
    if (arrPantalla.some(arreglo => arreglo == ("+") || ("-") || ("X") || ("/") || ("%") || ("^") || ("mod"))){
        return;
    }else{
        primerNum = Number(pantalla.textContent);
        pantalla.innerText += "mod";
        arrPantalla.push("mod");
        operador = "mod";
        puntos.pop();
    }
});

botonResultado.addEventListener("click", (e) => {
    segundoNum = pantalla.textContent;
    if(operador == ""){
        resultadoEnPantalla.innerText = "Resultado: " + pantalla.textContent;
        arrPantalla.pop();
        pantalla.innerText = "";
    }else if (operador == undefined){
        resultadoEnPantalla.innerText = "Resultado: " + pantalla.textContent;
    }else if(pantalla.textContent[0] == operador[0]){
        if (operador == "mod"){
            let nuevoIndice = resultadoEnPantalla.textContent.indexOf(" ");
            primerNum = resultadoEnPantalla.textContent.slice(nuevoIndice+1);
            let indice = segundoNum.indexOf(operador);
            segundoNum = segundoNum.slice(indice+3);
            let valorFinal = operate(Number(primerNum), operador, Number(segundoNum));
            resultadoEnPantalla.innerText = "Resultado: " + valorFinal;
            arrPantalla.pop();
            pantalla.innerText = "";
        } else{
            let nuevoIndice = resultadoEnPantalla.textContent.indexOf(" ");
            primerNum = resultadoEnPantalla.textContent.slice(nuevoIndice+1);
            let indice = segundoNum.indexOf(operador);
            segundoNum = segundoNum.slice(indice+1);
            let valorFinal = operate(Number(primerNum), operador, Number(segundoNum));
            resultadoEnPantalla.innerText = "Resultado: " + valorFinal;
            arrPantalla.pop();
            pantalla.innerText = "";
        }
    }else if (operador == "mod"){
        let indice = segundoNum.indexOf(operador);
        segundoNum = segundoNum.slice(indice+3);
        let valorFinal = operate(primerNum, operador, Number(segundoNum));
        resultadoEnPantalla.innerText = "Resultado: " + valorFinal;
        arrPantalla.pop();
        pantalla.innerText = "";
    }else{
        let indice = segundoNum.indexOf(operador);
        segundoNum = segundoNum.slice(indice+1);
        let valorFinal = operate(primerNum, operador, Number(segundoNum));
        resultadoEnPantalla.innerText = "Resultado: " + valorFinal;
        arrPantalla.pop();
        pantalla.innerText = "";
    }
    puntos.pop();
});

// Funcionamiento a botones de borrado
del.addEventListener("click", (e) => {
    let eliminar;
    let datosEnPantalla = pantalla.textContent
    datosEnPantalla = datosEnPantalla.split("");
    eliminar = datosEnPantalla.pop();
    if (eliminar == operador){
        arrPantalla.pop();
        operador = "";
    }
    pantalla.innerText = datosEnPantalla.join("");
});

c.addEventListener("click", (e) => {
    pantalla.innerText = "";
    operador = "";
    arrPantalla.pop();
    resultadoEnPantalla.innerText = "Resultado";
});
