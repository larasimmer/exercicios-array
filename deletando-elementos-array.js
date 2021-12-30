//Desafio - Cálculo de médias

//Deletar um elemento no array

const notas = [10, 7, 8, 5, 10];
notas.pop();

console.log(notas);

let mediaNotas = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length;

console.log(`A média é ${mediaNotas}`);