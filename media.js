//Desafio - Cálculo de médias

//Calculando a média utilizando função e parâmetros

let media;

function calculaMedia(primeiraNota, segundaNota, terceiraNota, quartaNota) {
    media = (primeiraNota + segundaNota + terceiraNota + quartaNota)/4;

    return media;
}

console.log(calculaMedia(10, 6.5, 8, 7.5));

//Calculando a média utilizando arrays

const notas = [10, 6.5, 8, 7.5];

let mediaNotas = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length;

console.log(mediaNotas);