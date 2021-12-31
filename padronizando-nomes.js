//Desafio: padronizar uma lista de nomes (deixar todos os nomes com letras maiúsculas)

const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesAtualizados = nomes.map(nome => nome.toUpperCase());

console.log(nomesAtualizados);