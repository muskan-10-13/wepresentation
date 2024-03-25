let playerScore = 0;
let computerScore = 0;

function makeChoice(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById('player-choice').innerText = playerChoice;
    document.getElementById('computer-choice').innerText = computerChoice;

    const result = getResult(playerChoice, computerChoice);
    if (result === 'win') {
        playerScore++;
    } else if (result === 'lose') {
        computerScore++;
    }

    document.getElementById('score').innerText = `Your Score: ${playerScore}`;
    document.getElementById('computer-score').innerText = `Computer Score: ${computerScore}`;
    document.getElementById('result').innerText = result.charAt(0).toUpperCase() + result.slice(1);
}

function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'draw';
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
               (playerChoice === 'scissors' && computerChoice === 'paper') ||
               (playerChoice === 'paper' && computerChoice === 'rock')) {
        return 'win';
    } else {
        return 'lose';
    }
}
