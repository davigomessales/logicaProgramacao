/**
 * A função makeShoppingList()cria uma lista de compras
 * com base nos itens quesão passados ​​para a função como argumentos.
Imagine que você sempre compra leite, pão e ovos toda vez que vai às compras.
Para facilitar a criação de uma lista de compras, vamos atribuir valores padrão
aos parâmetros em makeShoppingList().

Altere os parâmetros makeShoppingList()para os parâmetros padrão:
    Atribua 'leite' como o valor padrão de item1.
    Atribua 'pão' como o valor padrão de item2.
    Atribua 'ovos' como o valor padrão de item3.
 */
function makeShoppingList(item1 = 'leite', item2 = 'pão', item3 = 'ovos'){
    console.log(`Lembrar de comprar ${item1}`);
    console.log(`Lembrar de comprar ${item2}`);
    console.log(`Lembrar de comprar ${item3}`);
  }
  

  // makeShoppingList();
  // makeShoppingList('Amendoim');
  makeShoppingList(undefined, true);
  // makeShoppingList('Inhame', 'Charque', 'Manteiga');