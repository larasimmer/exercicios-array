//Desafio: criar uma lista de duas dimensões, que contém o nome dos alunos e as suas notas

const alunos = ["João", "Juliana", "Caio", "Ana"];
const notasAlunos = [10, 7, 9, 6];

let listaDeNotasEAlunos = [alunos, notasAlunos];

console.log(`${listaDeNotasEAlunos[0][0]}, sua nota é ${listaDeNotasEAlunos[1][0]}.`);