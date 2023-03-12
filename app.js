const buttons = document.querySelectorAll(".rps-buttons button");
const roundResult = document.getElementById("round-result");
const winner = document.getElementById("winner");

const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");

const round = document.getElementById("round");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");

buttons.forEach((btn) => {
    btn.addEventListener("click", playRound);
});

let player = 0;
let computer = 0;

function playRound(e) {
    const playerSelection = e.target.innerText;
    playerChoice.textContent = " " + playerSelection;
    const computerSelection = getComputerSelection();
    computerChoice.textContent = " " + computerSelection;

    switch (true) {
        case playerSelection === computerSelection:
            roundResult.textContent = "It's a tie!";
            break;

        case playerSelection === "Rock" && computerSelection === "Scissors":
        case playerSelection === "Paper" && computerSelection === "Rock":
        case playerSelection === "Scissors" && computerSelection === "Paper":
            player++;
            roundResult.innerHTML = "You won the round!";
            break;

        default:
            computer++;
            roundResult.innerHTML = "You lost the round!";
    }

    round.textContent++;
    playerScore.textContent = player;
    computerScore.textContent = computer;

    if (player === 5 || computer === 5) {
        winner.style.visibility = "visible";
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
        return "The game is over and YOU WIN!";
    } else {
        return "The game is over and YOU LOSE!";
    }
}
