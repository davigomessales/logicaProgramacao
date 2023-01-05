// Altere plantaPrecisaDeAgua para usar a sintaxe de arrow function

plantaPrecisaDeAgua()


//Function Declaration
function plantaPrecisaDeAgua (dia) {
  if (dia === 'Quarta-feira') {
    return true;
  } else {
    return false;
  }
}

//Function Expression
const plantaPrecisaDeAgua = function(dia) {
    if (dia === 'Quarta-feira') {
      return true;
    } else {
      return false;
    }
  };


  // Arrow Function
  const plantaPrecisaDeAgua = (dia) => {
    if (dia === 'Quarta-feira') {
      return true;
    } else {
      return false;
    }
  }


