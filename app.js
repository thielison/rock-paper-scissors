function getPlayerChoice() {
    const choice = prompt("Rock, paper, or scissors?").toLocaleLowerCase();
    if (choice === "rock") {
        return "Rock";
    } else if (choice === "paper") {
        return "Paper";
    } else if (choice === "scissors") {
        return "Scissors";
    } else {
        return "Not an option.";
    }
}

function getComputerChoice() {
    const number = Math.floor(Math.random() * 3 + 1);
    if (number === 1) {
        return "Rock";
    } else if (number === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(player, computer) {
    switch (true) {
        case player === computer:
            console.log("It's a tie!");
            break;

        case player === "Rock" && computer === "Scissors":
        case player === "Paper" && computer === "Rock":
        case player === "Scissors" && computer === "Paper":
            console.log(`You Win! ${player} beats ${computer}.`);
            return 0;

        default:
            console.log(`You Lose! ${computer} beats ${player}.`);
            return 1;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);
        if (roundResult === 0) playerScore++;
        else computerScore++;
    }

    console.log(getWinnerMessage(playerScore, computerScore));
}

function getWinnerMessage(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return `The game is over and YOU WIN! You scored ${playerScore} points and the computer scored ${computerScore} points.`;
    } else {
        return `The game is over and YOU LOSE! You scored ${playerScore} points and the computer scored ${computerScore} points.`;
    }
}

game();
