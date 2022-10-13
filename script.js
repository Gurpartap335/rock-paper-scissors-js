let gameOptions = ["rock", "paper", "scissors"];


function getComputerChoice() {
    return gameOptions[Math.floor(Math.random()*gameOptions.length)];
}

let computerSelection = getComputerChoice();
console.log(" Computer Selected move : " + computerSelection); // give more clarity to the user 

function getPlayerSelection() {
    return prompt("Enter your move: rock, paper, scissors");
}

let playerSelection = getPlayerSelection();

playerSelection = playerSelection.toLowerCase();
console.log("Player selected move :" + playerSelection);

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats Scissors";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beats Paper";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You Lose! Rock beats Scissors";
    } else {
        return "1";
    }
}

console.log(playRound(playerSelection, computerSelection));
