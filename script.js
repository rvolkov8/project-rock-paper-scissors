function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
};

function startGame(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You Lose! Paper beats Rock"
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You win! Rock beats Scissors"
    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        return "Draw! Let's play again"
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You lose! Scissors beats Paper"
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You win! Paper beats Rock"
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        return "Draw! Let's play again"
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You lose! Rock beats Scissors"
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You win! Scissors beats Paper"
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        return "Draw! Let's play again"
    } 
};  

const playerSelection = "scissors";
const computerSelection = getComputerChoice();
console.log(startGame(playerSelection,computerSelection));

