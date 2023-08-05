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
}