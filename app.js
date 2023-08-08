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
    if (segundoNum == 0) {
        alert("Estas intentando calcular un numero infinito!!! \nLimpia la pantalla!!");
        return resultadoEnPantalla.innerText = "Valor Infinito 🧐";
    } else {
        return primerNum / segundoNum;
    }
};

const porcentaje = function (primerNum, segundoNum) {
    return (primerNum * segundoNum) / 100;
};

const exponenciación = function (primerNum, segundoNum) {
    return primerNum ** segundoNum;
};

const divisiónModular = function (primerNum, segundoNum) {
    return primerNum % segundoNum;
};

// Variables para operaciones
let primerNum = 0;
let operador;
let segundoNum;

// Función de llamada a operaciones
function operate(primerNum, operador, segundoNum) {
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
            return pantalla.textContent;
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
const btnOperaciones = document.querySelectorAll(".btnOperaciones");
const botonResultado = document.getElementById("resultado");

// Variables para borrar
const del = document.getElementById("borrar");
const c = document.getElementById("limpiar");
const tamResultado = document.querySelector("p#valor");

// Agregar el valor de los botones en la pantalla
numeros.forEach(numero => {
    numero.addEventListener("click", (e) => {
        pantalla.innerText += e.target.innerText;
    });
});

botonPunto.addEventListener("click", (e) => {
    if (puntos[0] != ".") {
        puntos.push(".");
        pantalla.innerText += ".";
    } else {
        return;
    }
});

// Ecuchar eventos de teclado
window.addEventListener('keydown', insertarTeclado)
function insertarTeclado(e) {
    if (e.key >= 0 && e.key <= 9) pantalla.innerText += e.key;
    if (e.key == "+" || e.key == "-" || e.key == "X" || e.key == "/" || e.key == "%") {
        if (arrPantalla.some(arreglo => arreglo == ("+") || ("-") || ("X") || ("/") || ("%") || ("^") || ("mod"))) {
            return;
        } else {
            primerNum = Number(pantalla.textContent);
            arrPantalla.push(e.key);
            pantalla.innerText += e.key;
            operador = e.key;
            puntos.pop();
        }
    }
    if (e.key == "=") {
        segundoNum = pantalla.textContent;
        let nuevoResultado = "";
        switch (true) {
            case operador === "":
                if(pantalla.textContent == ""){
                    return resultadoEnPantalla;
                }else{
                    nuevoResultado = pantalla.textContent;
                    break;
                }

            case resultadoEnPantalla.textContent === "Resultado" && operador !== "":
                indice = segundoNum.indexOf(operador);
                segundoNum = (operador === "mod") ? segundoNum.slice(indice + 3) : segundoNum.slice(indice + 1);
                valorFinal = operate(primerNum, operador, Number(segundoNum));
                nuevoResultado = valorFinal;
                break;

            case operador === undefined || operador === "":
                nuevoResultado = pantalla.textContent;
                resultadoEnPantalla.textContent = nuevoResultado;
                break;

            case pantalla.textContent[0] === operador[0]:
                const nuevoIndice = resultadoEnPantalla.textContent.indexOf(" ");
                primerNum = resultadoEnPantalla.textContent.slice(nuevoIndice + 1);
                indice = segundoNum.indexOf(operador);
                segundoNum = (operador === "mod") ? segundoNum.slice(indice + 3) : segundoNum.slice(indice + 1);
                valorFinal = operate(Number(primerNum), operador, Number(segundoNum));
                nuevoResultado = (Math.round(valorFinal * 10000) / 10000);
                break;

            default:
                indice = segundoNum.indexOf(operador);
                segundoNum = segundoNum.slice(indice + 1);
                valorFinal = operate(primerNum, operador, Number(segundoNum));
                nuevoResultado = (Math.round(valorFinal * 10000) / 10000);
                break;
        }

        resultadoEnPantalla.innerText = "Resultado: " + nuevoResultado;
        arrPantalla.pop();
        pantalla.innerText = "";
        puntos.pop();
        operador = "";

        resultadoEnPantalla.textContent.length > 26 ? tamResultado.style.fontSize = "18px" : tamResultado.style.fontSize = "24px";
    }
    if (e.key == "C"){
        pantalla.innerText = "";
        operador = "";
        arrPantalla.pop();
        resultadoEnPantalla.innerText = "Resultado";
        tamResultado.style.fontSize = "24px";
    }
    if (e.key == "Backspace"){
        let eliminar;
        let datosEnPantalla = pantalla.textContent
        datosEnPantalla = datosEnPantalla.split("");
        eliminar = datosEnPantalla.pop();
        if (eliminar == operador) {
            arrPantalla.pop();
            operador = "";
        }
        pantalla.innerText = datosEnPantalla.join("");
    }
    if (e.key == "."){
        if (puntos[0] != ".") {
            puntos.push(".");
            pantalla.innerText += ".";
        } else {
            return;
        }
    }
}

// Agregar el valor del operador
btnOperaciones.forEach(operacion => {
    operacion.addEventListener("click", (e) => {
        if (arrPantalla.some(arreglo => arreglo == ("+") || ("-") || ("X") || ("/") || ("%") || ("^") || ("mod"))) {
            return;
        } else {
            primerNum = Number(pantalla.textContent);
            arrPantalla.push(e.target.innerText);
            pantalla.innerText += e.target.innerText;
            operador = e.target.innerText;
            puntos.pop();
        }
    });
});

botonResultado.addEventListener("click", () => {
    segundoNum = pantalla.textContent;
    let nuevoResultado = "";

    switch (true) {
        case operador === "":
            if(pantalla.textContent == ""){
                return resultadoEnPantalla
            }else{
                nuevoResultado = pantalla.textContent;
                break;
            }

        case resultadoEnPantalla.textContent == "Resultado" && operador != "":
            indice = segundoNum.indexOf(operador);
            segundoNum = (operador === "mod") ? segundoNum.slice(indice + 3) : segundoNum.slice(indice + 1);
            valorFinal = operate(primerNum, operador, Number(segundoNum));
            nuevoResultado = valorFinal;
            break;

        case operador === undefined || operador === "":
            nuevoResultado = pantalla.textContent;
            break;

        case pantalla.textContent[0] === operador[0]:
            const nuevoIndice = resultadoEnPantalla.textContent.indexOf(" ");
            primerNum = resultadoEnPantalla.textContent.slice(nuevoIndice + 1);
            indice = segundoNum.indexOf(operador);
            segundoNum = (operador === "mod") ? segundoNum.slice(indice + 3) : segundoNum.slice(indice + 1);
            valorFinal = operate(Number(primerNum), operador, Number(segundoNum));
            nuevoResultado = (Math.round(valorFinal * 10000) / 10000);
            break;

        default:
            indice = segundoNum.indexOf(operador);
            segundoNum = segundoNum.slice(indice + 1);
            valorFinal = operate(primerNum, operador, Number(segundoNum));
            nuevoResultado = (Math.round(valorFinal * 10000) / 10000);
            break;
    }

    resultadoEnPantalla.innerText = "Resultado: " + nuevoResultado;
    arrPantalla.pop();
    pantalla.innerText = "";
    puntos.pop();
    operador = "";

    resultadoEnPantalla.textContent.length > 26 ? tamResultado.style.fontSize = "18px" : tamResultado.style.fontSize = "24px";
});

// Funcionamiento a botones de borrado
del.addEventListener("click", (e) => {
    let eliminar;
    let datosEnPantalla = pantalla.textContent
    datosEnPantalla = datosEnPantalla.split("");
    eliminar = datosEnPantalla.pop();
    if (eliminar == operador) {
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
    tamResultado.style.fontSize = "24px";
});
