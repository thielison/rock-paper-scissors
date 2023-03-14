const playerButtons = document.querySelectorAll("#player-buttons .play-option button");
const computerButtons = document.querySelectorAll("#computer-buttons .play-option");

const roundResult = document.getElementById("round-result");

let round = document.getElementById("round");
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");

const resetButton = document.getElementById("reset-button");

playerButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        playerButtons.forEach((button) => {
            // Removes color of all player buttons
            button.parentElement.style.backgroundColor = "";
        });

        // Removes color of all computer buttons
        for (let btn of computerButtons) {
            btn.style.backgroundColor = "";
        }

        // Add color to clicked button of player
        btn.parentElement.style.backgroundColor = "#8ecae6";
        playRound(e);
    });
});

let player = 0;
let computer = 0;

function playRound(e) {
    const playerSelection = e.target.className;
    const computerSelection = getComputerSelection();

    // Add color to specific button of computer selection
    const computerButton = document.querySelector(`#computer-buttons .play-option .${computerSelection}`);
    computerButton.parentElement.parentElement.style.backgroundColor = "#ff595e";

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
        roundResult.textContent = getWinnerMessage(player, computer);

        playerButtons.forEach((btn) => {
            btn.disabled = true;
        });

        resetGame();
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

function resetGame() {
    resetButton.style.visibility = "visible";
    console.log(resetButton);

    resetButton.addEventListener("click", function () {
        player = 0;
        computer = 0;
        playerScore.textContent = 0;
        computerScore.textContent = 0;
        round.textContent = 0;

        playerButtons.forEach((btn) => {
            btn.disabled = false;
        });

        playerButtons.forEach((button) => {
            // Removes color of all player buttons
            button.parentElement.style.backgroundColor = "";
        });

        // Removes color of all computer buttons
        for (let btn of computerButtons) {
            btn.style.backgroundColor = "";
        }

        roundResult.textContent = "Click a button to start the game";
    });
}
