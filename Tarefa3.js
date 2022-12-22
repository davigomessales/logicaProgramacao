const userName = '';
// Expressão ternária
// A ? B : C
userName ? console.log(`Hello ${userName}!`) : console.log('Hello!');

// Pergunta que deve ser respondida
const userQuestion = 'Ficarei rico em 2023?';

const perguntaCompleta = userName 
? `${userName} está perguntando: ${userQuestion}`
: `Usuário anônimo pergunta: ${userQuestion}`

console.log(perguntaCompleta)

// Gerando um valor aleatorio
let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

let eigthBall = ''
// Switch

// switch (randomNumber) {
//     case 0: {
//         eigthBall = 'It is certain (É uma certeza).';
//         break;
//     }
//     case 1: {
//         eigthBall = 'It is decidedly so (É decididamente assim.)';
//         break;
//     }
//     case 2: {
//         eigthBall = 'Reply hazy try again (Resposta nebulosa, tente de novo)';
//         break;
//     }
//     case 3: {
//         eigthBall = 'Cannot predict now (Não consigo prever agora.)';
//         break;
//     }
//     case 4: {
//         eigthBall = 'Do not count on it (Não conte com isso.)';
//         break;
//     }
//     case 5: {
//         eigthBall = 'My sources say no (Minhas fontes dizem que não.)';
//         break;
//     }
//     case 6: {
//         eigthBall = 'Outlook not so good (Perspectiva não tão boa)';
//         break;
//     }
//     case 7: {
//         eigthBall = 'Signs point to yes (Os sinais apontam que sim)';
//         break;
//     }
//     default: {
//         eigthBall = 'Sei lá, irmão!'
//     }

// }


// IF ELSE ELSE IF
if (randomNumber === 0) {
    eigthBall = 'It is certain (É uma certeza).';
} else if (randomNumber === 1) {
    eigthBall = 'It is decidedly so (É decididamente assim.)';
} else if (randomNumber === 2) {
    eigthBall = 'Reply hazy try again (Resposta nebulosa, tente de novo)';
} else if (randomNumber === 3) {
    eigthBall = 'Cannot predict now (Não consigo prever agora.)';
} else if (randomNumber === 4) {
    eigthBall = 'Do not count on it (Não conte com isso.)';
} else if (randomNumber === 5) {
    eigthBall = 'My sources say no (Minhas fontes dizem que não.)';
} else if (randomNumber === 6) {
    eigthBall = 'Outlook not so good (Perspectiva não tão boa)';
} else if (randomNumber === 7) {
    eigthBall = 'Signs point to yes (Os sinais apontam que sim)';
} else {
    eigthBall = 'Sei lá, irmão!'
}

console.log(eigthBall);



