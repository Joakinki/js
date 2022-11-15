const mostrarTexto = (operacion, valor) => {
    alert('la ' + operacion + ' es : ' + valor);
}

function parsearValor (texto) {
    return parseFloat(prompt(texto));
}
const porciento = x => y * (x / 100)
let numeroA = parsearValor('ingrese un numero');
let numeroB = parsearValor('ingrese el porcentaje a calcular');

while(isNaN(numeroA) || isNaN(numeroB)) {
    numeroA = parsearValor('ingrese de nuevo el primer numero');
    numeroB = parsearValor('ingrese ');
}

const operacion = prompt('quiere sumarle o restarle el %?')


switch (operacion) {
    case '+': 
        mostrarTexto('sumar', (numeroA + (numeroA * (numeroB / 100))));
    break;
    case '-':
        mostrarTexto('restar', (numeroA -(numeroA * (numeroB / 100))));
    break;
    default:
        alert('ingreso no válido');
}