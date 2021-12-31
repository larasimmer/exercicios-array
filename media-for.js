//Desafio: calcular a média das notas utilizando o "for"

const notas = [10, 6.5, 8, 7.5];

let somaNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
}

let media = somaNotas/notas.length;

console.log(`A média é ${media}.`);