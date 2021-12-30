//Desafio - Cálculo de médias

let media;

function calculaMedia(primeiraNota, segundaNota, terceiraNota, quartaNota) {
    media = (primeiraNota + segundaNota + terceiraNota + quartaNota)/4;

    return media;
}

console.log(calculaMedia(10, 6.5, 8, 7.5));