//Desafio: atualizar a lista de nomes, removendo dois alunos e incluindo outro.
// A Ana e o Caio mudaram de escola, e o Rodrigo passou  a estudar nesta sala.

const nomesAlunos = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

nomesAlunos.splice(1, 2, "Rodrigo");

console.log(nomesAlunos);