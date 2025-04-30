function getComputerChoice() {
    let randomNum = Math.random();

    if (randomNum <= 1/3) {
        return "rock";
    }   
    else if (randomNum <= 2/3) {
        return "paper";
    }   
    else if (randomNum <= 1) {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Enter: Rock, Paper or Scissors").toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;


    function playRound(humanChoice, computerChoice) {
        let result;

        if (humanChoice === computerChoice) {
            result = "It's a Tie";
        }
        else if (humanChoice == "rock") {
            if (computerChoice == "paper") {
                result = "You lose! Paper beats Rock";
                computerScore++;
            } else {
                result = "You win! Rock beats Scissors";
                humanScore++;
            }
        }
        else if (humanChoice == "paper") {
            if (computerChoice == "scissors") {
                result = "You lose! Scissors beats Paper";
                computerScore++;
            } else {
                result = "You win! Paper beats Rock";
                humanScore++;
            }
        }
        else if (humanChoice == "scissors") {
            if (computerChoice == "rock") {
                result = "You lose! Rock beats Scissors";
                computerScore++;
            } else {
                result = "You win! Scissors beats Paper";
                humanScore++;
            }
        }
        alert (`You Chose: ${humanChoice}\nThe Computer Chose: ${computerChoice}\n${result}\nScore: ${humanScore} | ${computerScore}`);
    }

    for (let i = 1; i <= 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
}

playGame();