//#region 
// Valor da temperatura em Kelvin
const kelvin = 293;
//#endregion

//#region 
// Conversão de temperatura para Celsius.
const celsius = kelvin - 273;
//#endregion

//#region 
// conversão de celsius para Fahrenheit.
let fahrenheit = celsius * (9 / 5) + 32;
//#endregion


//#region 
// arredondar para baixo o valor em fahrenheit
fahrenheit = Math.floor(fahrenheit);
//#endregion

//#region 
console.log(`A temperatura é ${kelvin} Kelvin.
A temperatura é ${celsius} graus Celsius.
A temperatura é ${fahrenheit} graus Fahrenheit.`)
//#endregion
