// Desafio: filtrar por nota na lista, e mostrar qual aluno está reprovado.

const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const notas = [7, 4.5, 8, 7.5];

const alunosReprovados = alunos.filter((aluno, indice) => notas[indice] < 5);

console.log(alunosReprovados);