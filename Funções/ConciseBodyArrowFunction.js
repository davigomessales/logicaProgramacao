/**
 * Vamos refatorar a função plantaPrecisaDeAgua() para ter o corpo conciso
 * Perceba que já convertemos o bloco if/else para um operador ternário
 * para o código caber em uma linha.
 */

// const plantaPrecisaDeAgua = (dia) => {
//   if (dia === 'Quarta-feira') {
//     return true;
//   } else {
//     return false;
//   }
//   };

const plantaPrecisaDeAgua = dia => dia === 'Quarta-feira' ? true : false;

console.log(plantaPrecisaDeAgua('Quarta-feira'));
