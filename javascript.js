let humanScore = 0;
let computerScore = 0;
let gameOver = false;

const humanScoreDisplay = document.querySelector(".humanScore");
const computerScoreDisplay = document.querySelector(".computerScore");
const resultDisplay = document.querySelector(".displayResults");

function getComputerChoice() {
    let randomNum = Math.random();

    if (randomNum <= 1 / 3) {
        return "rock";
    } else if (randomNum <= 2 / 3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice) {
    if (gameOver) return;

    const computerChoice = getComputerChoice();
    let result;

    if (humanChoice === computerChoice) {
        result = "It's a Tie!";
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            result = "You lose! Paper beats Rock";
            computerScore++;
        } else {
            result = "You win! Rock beats Scissors";
            humanScore++;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            result = "You lose! Scissors beats Paper";
            computerScore++;
        } else {
            result = "You win! Paper beats Rock";
            humanScore++;
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            result = "You lose! Rock beats Scissors";
            computerScore++;
        } else {
            result = "You win! Scissors beats Paper";
            humanScore++;
        }
    }

    humanScoreDisplay.textContent = `Your Score: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer's Score: ${computerScore}`;
    resultDisplay.textContent = `You chose: ${humanChoice}, Computer chose: ${computerChoice}. ${result}`;

    if (humanScore === 5) {
        resultDisplay.textContent = `You win the game! Final Score - You: ${humanScore} | Computer: ${computerScore}`;
        gameOver = true;
    } else if (computerScore === 5) {
        resultDisplay.textContent = `Computer wins the game! Final Score - You: ${humanScore} | Computer: ${computerScore}`;
        gameOver = true;
    }
}

document.getElementById("rock").addEventListener("click", () => {
    playRound("rock");
});

document.getElementById("paper").addEventListener("click", () => {
    playRound("paper");
});

document.getElementById("scissors").addEventListener("click", () => {
    playRound("scissors");
});