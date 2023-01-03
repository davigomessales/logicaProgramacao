/**
 * 1 - Dentro de uma instrução console.log(), crie um número aleatório com Math.random(), depois multiplique por 100.
 * 2 - Agora, use Math.floor()para tornar a saída um número inteiro. Dentro do console.log() anterior,
 * coloque o Math.random() * 100 no código existente entre parênteses de Math.floor().
 * 3 - Encontre um método no objeto JavaScript Math que retorne o menor inteiro maior ou igual a um número decimal.
 Use este método com o número 43.8. Registre a resposta no console.
 * 4 - Use a documentação do JavaScript para localizar um método no objeto integrado Number que verifica se um número é um número inteiro.
 Coloque o número 2017 entre parênteses do método e use console.log() para imprimir o resultado.
 */
console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * 100));
console.log(Math.floor(43.8))
console.log(Math.ceil(43.8))
console.log(Number.isNaN(NaN));

