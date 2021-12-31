//Desafio: sabendo a média dos alunos de três salas, calcular a média geral de cada sala.

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMediaDaSala(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acum, atual) => acum + atual, 0);
    return somaDasNotas/notasDaSala.length;
}

console.log(`A média da sala de JS é ${calculaMediaDaSala(salaJS)}.`);
console.log(`A média da sala de JS é ${calculaMediaDaSala(salaJava)}.`);
console.log(`A média da sala de JS é ${calculaMediaDaSala(salaPython)}.`);