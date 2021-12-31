const notas = [10, 6.5, 8, 7];

function calculaMediaDoAluno() {
    const somaDasNotas = notas.reduce((acum, atual) => acum + atual, 0);
    return somaDasNotas/notas.length;
}

console.log(`A média do aluno é ${calculaMediaDoAluno()}.`);