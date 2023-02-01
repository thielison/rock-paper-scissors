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

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
