let gameOptions = ["rock", "paper", "scissors"];


function getComputerChoice() {
    return gameOptions[Math.floor(Math.random()*gameOptions.length)];
}


function getPlayerSelection() {
    return prompt("Enter your move: rock, paper, scissors");
}

let playerSelection;
let computerSelection;

function playRound(playerSelection, computerSelection) {

    playerSelection = getPlayerSelection();
    console.log("Player selected move :" + playerSelection);

    computerSelection = getComputerChoice();
    console.log(" Computer Selected move : " + computerSelection);
    

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


function game() {
    for (i = 0; i < 5; i++) {
        ans[i] = playRound(playerSelection, computerSelection);
    }
}

let ans = new Array(5);

function result() {
    for (i = 0; i < ans.length; i++) {
        console.log(ans[i]);
    }
}

game();
result();