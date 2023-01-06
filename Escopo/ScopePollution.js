/**
 * Vamos ver o que acontece se criarmos uma variável que sobrescreve uma variável global.
 * 1 - Dentro da função callMyNightSky(), na primeira linha do corpo da função, atribua a variável stars como 'Sirius': stars = 'Sirius';
 * 2 - Fora da função, na instrução console.log() atual, adicione outra instrução console.log() para exibir stars no console.
 * 
 * Você notará que a variável global stars foi reatribuída para 'Sirius'. Em outras palavras, alteramos o valor da variável global stars,
 * mas não é fácil ler exatamente o que aconteceu. Essa é uma prática ruim na capacidade de manutenção do código e pode afetar nosso
 * programa de maneiras que não pretendemos.
 */

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
