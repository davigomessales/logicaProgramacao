// Valor da temperatura em Kelvin
const kelvin = 293;

// Conversão de temperatura para Celsius.
const celsius = kelvin - 273;

// conversão de celsius para Fahrenheit.
let fahrenheit = celsius * (9 / 5) + 32;


// arredondar para baixo o valor em fahrenheit
fahrenheit = Math.floor(fahrenheit);

console.log(`A temperatura é ${kelvin} Kelvin.
A temperatura é ${celsius} graus Celsius.
A temperatura é ${fahrenheit} graus Fahrenheit.`)
