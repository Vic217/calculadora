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
    return primerNum ** segundoNum;
};

const divisiónModular = function(primerNum, segundoNum) {
    return primerNum % segundoNum;
};

// Variables para operaciones
let primerNum = 0;
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
let numeros = document.querySelectorAll(".btnNumerico");
const botonPunto = document.getElementById("punto");
let arrPantalla = [];
let puntos = [];
let indice;
let valorFinal;

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

// Agregar el valor de los botones en la pantalla
numeros.forEach(numero =>{
    numero.addEventListener("click", (e) => {
        pantalla.innerText +=  e.target.innerText;
    });
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
    }else if(resultadoEnPantalla.textContent == "Resultado" && operador != ""){
        indice = segundoNum.indexOf(operador);
        if(operador == "mod"){
            segundoNum = segundoNum.slice(indice+3)
        }else{
            segundoNum = segundoNum.slice(indice+1);
        }
        valorFinal = operate(primerNum, operador, Number(segundoNum));
        resultadoEnPantalla.innerText = "Resultado: " + valorFinal;
        arrPantalla.pop();
        pantalla.innerText = "";
    }else if (operador == undefined){
        resultadoEnPantalla.innerText = "Resultado: " + pantalla.textContent;
    }else if(pantalla.textContent[0] == operador[0]){
        let nuevoIndice = resultadoEnPantalla.textContent.indexOf(" ");
        primerNum = resultadoEnPantalla.textContent.slice(nuevoIndice+1);
        indice = segundoNum.indexOf(operador);
        if (operador == "mod"){
            segundoNum = segundoNum.slice(indice+3);
        }else{
            segundoNum = segundoNum.slice(indice+1);
        }
        valorFinal = operate(Number(primerNum), operador, Number(segundoNum));
        resultadoEnPantalla.innerText = "Resultado: " + (Math.round(valorFinal*10000)/(10000));
        arrPantalla.pop();
        pantalla.innerText = "";
    }else{
        indice = segundoNum.indexOf(operador);
        segundoNum = segundoNum.slice(indice+1);
        valorFinal = operate(primerNum, operador, Number(segundoNum));
        resultadoEnPantalla.innerText = "Resultado: " + (Math.round(valorFinal*10000)/(10000));
        arrPantalla.pop();
        pantalla.innerText = "";
    }
    puntos.pop();
    if (resultadoEnPantalla.textContent.length > 26){
        console.log("Entre");
        const tamResultado = document.querySelector("p#valor");
        tamResultado.style.fontSize = "15px";
    }
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
