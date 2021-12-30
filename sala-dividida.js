//Desafio - Cálculo de médias

//Dividir uma lista de alunos em duas listas

const nomesAlunos = ["João", "Juliana", "Ana", "Caio", "Lara", "Marjorie", "Guilherme", "Aline", "Fabiana", "Andre", "Carlos", "Paulo", "Bia", "Vivian", 
"Isabela", "Vinicius", "Renan", "Renata", "Daisy", "Camilo"];

const sala1 = nomesAlunos.slice(0, nomesAlunos.length/2);
const sala2 = nomesAlunos.slice(nomesAlunos.length/2);

console.log(`Alunos da sala 1: ${sala1}`);
console.log(`Alunos da sala 2: ${sala2}`);