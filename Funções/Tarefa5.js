const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'pedra' || userInput === 'papel' || userInput === 'tesoura') {
        return userInput;
    } else return console.log('Erro catastrófico!');
}

function getComputerChoice () {
    const numberChoice = Math.floor(Math.random() * 3);
    // pedra papel tesoura
    let option;
    switch (numberChoice) {
        case 0:
            option = 'pedra';
            break;
        case 1:
            option = 'papel';
            break;
        case 2:
            option = 'tesoura';
            break;
        default:
            option = 'erro estranho';
    }
    return option;
}

console.log(getComputerChoice());