//Desafio: adicionar um ponto extra nas notas de um aluno

const notas = [10, 9, 8, 7, 6];

const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota);

console.log(`As notas atualizadas são ${notasAtualizadas}.`);