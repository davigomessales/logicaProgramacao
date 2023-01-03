/**
 * 1 - Altere o valor de wordCountpara que seja verdadeiro. Esse valor ainda deve ser um número.
 * Após fazer essa alteração e executar o código a mensagem 'Excelente! Você começou a trabalhar!'
 * 2 - Altere o valor de favoritePhrase para que se torne falsy, mas que ainda seja uma string.
 * Após fazer essa alteração e executar o código a mensagem 'Esta string esta com certeza vazia.'
 * 
 */

let wordCount = 1;

if (wordCount) {
  console.log("Excelente! Você começou a trabalhar!");
} else {
  console.log('Melhor ir ao trabalho');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("Esta string não parece vazia.");
} else {
  console.log('Esta string esta com certeza vazia.');
}