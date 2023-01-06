options = ["rock", "paper", "scissors"];

game();

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (checkWinner(playerSelection, computerSelection) === "Player") {
            playerScore++;
        } else if (checkWinner(playerSelection, computerSelection) === "Computer") {
            computerScore++;
        }
    }
    console.log("Game Over");
    if (playerScore > computerScore) {
        console.log("Player wins!");
    } else if (playerScore < computerScore) {
        console.log("Computer wins :(");
    }
    console.log("---------------------------------");
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
    if (result === "Tie") {
        return "It's a Tie!";
    } else if (result === "Player") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (result === "Computer") {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function getPlayerChoice() {
    validatedChoice = false;
    while (validatedChoice === false) {
        const choice = prompt("Rock, Paper or Scissors?");
        let choiceToLowerCase = choice.toLocaleLowerCase();
        if (choice == null) {
            continue;
        } else if (options.includes(choiceToLowerCase)) {
            validatedChoice = true;
            return choiceToLowerCase;
        }
    }
} 
