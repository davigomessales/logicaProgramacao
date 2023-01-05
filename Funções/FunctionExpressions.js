/**
 * Digamos que temos uma planta que precisamos regar uma vez por semana às quartas-feiras.
 * Poderíamos definir uma expressão de função para nos ajudar a verificar o dia da semana e
 * se a planta precisa ser regada:
    1 - Crie uma variável chamada plantaPrecisaDeAgua usando a palavra- chave const.

    2 - Atribua uma função anônima que receba um parâmetro chamado dia para a função plantaPrecisaDeAgua

    3 - Agora precisamos adicionar algum código ao corpo da função de plantaPrecisaDeAgua()
        No corpo da função, adicione uma condicional if que verifique se dia === 'Quarta-feira'.

    4 - Se a condicional for verdadeira, dentro do bloco de código if, use a palavra-chave return para retornar true.
    5 - Nos dias que não forem 'Quarta-feira', plantaPrecisaDeAgua()deverá retornar false:
       Adicione uma instrução else após a instrução if. 
    6 - Dentro da instrução else, use a palavra-chave return para retornar false.
    7 - Chame o plantaPrecisaDeAgua() e passe 'Terça-feira' como um argumento.
    8 - Para verificar se a função funciona adequadamente, imprima plantaPrecisaDeAgua() no console.
 */

    function lembrarDeRegar() {
      console.log('Regue a planta')
    }

    lembrarDeRegar();

    const plantaPrecisaDeAgua = function(dia){
      if (dia === 'Quarta-feira') {
         return true;
      } else {
         return false;
      }
    }

    console.log(plantaPrecisaDeAgua('Quarta-Feira'))