const buttons = document.querySelectorAll(".rps-buttons button");
const roundResult = document.getElementById("round-result");
const score = document.getElementById("score");
const winner = document.getElementById("winner");

buttons.forEach((btn) => {
    btn.addEventListener("click", playRound);
});

let player = 0;
let computer = 0;

function playRound(e) {
    const playerSelection = e.target.innerText;
    const computerSelection = getComputerSelection();

    switch (true) {
        case playerSelection === computerSelection:
            roundResult.textContent = "It's a tie!";
            break;

        case playerSelection === "Rock" && computerSelection === "Scissors":
        case playerSelection === "Paper" && computerSelection === "Rock":
        case playerSelection === "Scissors" && computerSelection === "Paper":
            player++;
            roundResult.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;
            break;

        default:
            computer++;
            roundResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`;
    }

    score.textContent = "PLAYER: " + player + "   " + "COMPUTER: " + computer;

    if (player === 5 || computer === 5) {
        winner.textContent = getWinnerMessage(player, computer);

        buttons.forEach((btn) => {
            btn.disabled = true;
        });
    }
}

function getComputerSelection() {
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function getWinnerMessage(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return `The game is over and YOU WIN! You scored ${playerScore} points and the computer scored ${computerScore} points.`;
    } else {
        return `The game is over and YOU LOSE! You scored ${playerScore} points and the computer scored ${computerScore} points.`;
    }
}
