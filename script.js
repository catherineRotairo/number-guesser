let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (humanGuess, computerGuess, targetNum) => {
    let humanG = Math.abs(targetNum - humanGuess);
    let computerG = Math.abs(targetNum - computerGuess);
    return humanG <= computerG;
}

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    } else {
        console.log('invalid winner input');
    }
}

const advanceRound = () => {
    currentRoundNumber++
}
