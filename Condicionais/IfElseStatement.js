/**
 * Vamos criar um programa que monitore como o ambiente muda com as estações.
 * Escreva uma declaração condicional para fazer isso acontecer!
 * 1 - Já existe uma instrução if...else, adicione mais uma para verificar se season é igual 'inverno'.
 * No bloco de coódigo da instrução else if, adicione o console.log('É inverno! Tudo está coberto de neve')
 * 2 - Adicione mais um bloco else if para verificar se season é igual 'outono'.
 * No bloco de coódigo da instrução else if, adicione o console.log('É outono, as folhas estão caindo.')
 * 3 - Adicione mais um bloco else if para verificar se season é igual 'verão'.
 * No bloco de coódigo da instrução else if, adicione o console.log('Está quente e fazendo sol por causa do verão.')
 * 
 */
let season = 'verão';

if (season === 'primavera') {
  console.log('É primavera! As flores estão brotando!');
} else {
  console.log('Estação inválida.');
}