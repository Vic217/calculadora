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
        return console.error("Operación indefinida");
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
    }
}
