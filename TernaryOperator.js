/**
 * Refatore ou edite cada um dos blocos if...else para usar um operador ternário.
 */
let isLocked = true;

if (isLocked) {
  console.log('Você vai precisar de uma chave para abrir a porta.');
} else {
  console.log('Você não vai precisar de uma chave para abrir a porta.');
}

isLocked 
? console.log('Você vai precisar de uma chave para abrir a porta.') 
: console.log('Você não vai precisar de uma chave para abrir a porta.');

let isCorrect = true;

if (isCorrect) {
  console.log('Correto!');
} else {
  console.log('Incorreto!');
}

let favoritePhrase = 'Gostei!';

if (favoritePhrase === 'Gostei!') {
  console.log('Eu gostei disso!');
} else {
  console.log("Eu não gostei disso.");
}