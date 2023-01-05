/**
 * No exercício anterior, criamos uma função para encontrar a quantidade de monitores a
 * serem encomendados para um escritório. Agora vamos escrever outra função que usa a
 * função monitorCount para descobrir o preço.
 * 
 * 1 - Abaixo de monitorCount, crie uma declaração de função chamada costOfMonitors que tenha
 * dois parâmetros, o primeiro parâmetro é rows e o segundo parâmetro é columns. Deixe o corpo
 * da função vazio por enquanto.
 * 
 * 2 - Adicione uma declaração return que retorna o valor da chamada de 
 * monitorCount(rows, columns) multiplicado por 200 no corpo da função costOfMonitors para
 * calcular o custo total.
 *  
 * 3 - Devemos salvar o custo em uma variável
 * Declare uma variável chamada totalCost usando a palavra-chave const. Atribua ao
 * totalCost valor de chamada costOfMonitors() com os argumentos 5 e 4 respectivamente.
 * 
 * 4 - Para verificar se a função funciona adequadamente, imprima totalCost no console.
 */
function monitorCount(rows, columns){
    return rows * columns;
}
function costOfMonitors(rows, columns){
    return monitorCount(rows, columns) * 200;
}
const totalCost = costOfMonitors(5, 4);

console.log(totalCost);