const numeros = [1, 2, 3, 4];

const numerosMultiplicados = numeros.map(multiplicaPor10);

function multiplicaPor10(numero) {
    return numero = numero * 10;
}

console.log(numerosMultiplicados);