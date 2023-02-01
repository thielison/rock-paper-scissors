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
            return "It's a tie!";

        case player === "Rock" && computer === "Scissors":
        case player === "Paper" && computer === "Rock":
        case player === "Scissors" && computer === "Paper":
            return `You Win! ${player} beats ${computer}.`;

        default:
            return `You Lose! ${computer} beats ${player}.`;
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
