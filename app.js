const buttons = document.querySelectorAll("#player-buttons .play-option button");
const roundResult = document.getElementById("round-result");
const winner = document.getElementById("winner");

const round = document.getElementById("round");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");

buttons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        buttons.forEach((button) => {
            // Removes color of all buttons
            button.parentElement.style.backgroundColor = "";
        });
        // Add color to clicked button
        btn.parentElement.style.backgroundColor = "#8ecae6";
        playRound(e);
    });
});

let player = 0;
let computer = 0;

function playRound(e) {
    const playerSelection = e.target.className;
    const computerSelection = getComputerSelection();

    switch (true) {
        case playerSelection === computerSelection:
            roundResult.textContent = "It's a tie!";
            break;

        case playerSelection === "rock" && computerSelection === "scissors":
        case playerSelection === "paper" && computerSelection === "rock":
        case playerSelection === "scissors" && computerSelection === "paper":
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
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function getWinnerMessage(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return "The game is over and YOU WIN!";
    } else {
        return "The game is over and YOU LOSE!";
    }
}
