//Desafio: criar uma função que recebe como argumento o nome do aluno; verificar se o aluno se encontra na lista, 
// e retornar sua média final; caso o aluno não esteja na lista, exibir uma mensagem de que ele não foi encontrado.

const alunos = ["João", "Juliana", "Caio", "Ana"];
const mediasAlunos = [10, 7, 9, 6];

let listaDeMediasEAlunos = [alunos, mediasAlunos];

function exibeNomeEMedia(nomeDoAluno) {
    if (listaDeMediasEAlunos[0].includes(nomeDoAluno)) {
        indice = listaDeMediasEAlunos[0].indexOf(nomeDoAluno);
        console.log(`${nomeDoAluno}, sua média é ${listaDeMediasEAlunos[1][indice]}`);
    } else {
        console.log(`O aluno não está na lista.`);
    }
}

exibeNomeEMedia("Lara");