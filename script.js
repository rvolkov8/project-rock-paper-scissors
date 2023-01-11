options = ["rock", "paper", "scissors"];

const resultDiv = document.querySelector("#result")
const scoreDiv = document.querySelector("#score")

const buttons = document.querySelectorAll(".weapons");

let computerScore = 0;
let playerScore = 0;

buttons.forEach(button => button.addEventListener("click", () => {
    computerSelection = getComputerChoice();
    playerSelection = button.textContent;
    playerSelection = playerSelection.toLowerCase();
    playRound(playerSelection, computerSelection);

    if (playerScore < 5 && computerScore < 5) {
        if (checkWinner(playerSelection, computerSelection) === "Player") {
            playerScore++;
        } else if (checkWinner(playerSelection, computerSelection) === "Computer") {
            computerScore++;
        }
        scoreDiv.textContent = `Player ${playerScore} : ${computerScore} Computer`;
    } else {
        resultDiv.textContent = "Game over!";
        if (playerScore > computerScore) {
            scoreDiv.textContent = `Player wins! ${playerScore} - ${computerScore}`;
        } else {
            scoreDiv.textContent = `Computer wins :( ${playerScore} - ${computerScore}`;
        }
    } 
}));

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
    if (result === "Tie") {
        resultDiv.textContent = "It's a Tie!";
    } else if (result === "Player") {
        resultDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (result === "Computer") {
        resultDiv.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
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

// THIS WORK JUST FOR THE ROCK BUTTON
// rockBtn.addEventListener("click", () => {
//     computerSelection = getComputerChoice();
//     playerSelection = "rock";
//     playRound(playerSelection, computerSelection);
//     if (playerScore < 4 && computerScore < 4) {
//         if (checkWinner(playerSelection, computerSelection) === "Player") {
//             playerScore++;
//         } else if (checkWinner(playerSelection, computerSelection) === "Computer") {
//             computerScore++;
//         }
//         scoreDiv.textContent = `Player ${playerScore} : ${computerScore} Computer`;
//     } else {
//         resultDiv.textContent = "Game over!";
//         if (playerScore > computerScore) {
//             scoreDiv.textContent = `Player wins! ${playerScore} – ${computerScore}`;
//         } else {
//             scoreDiv.textContent = `Computer wins :( ${playerScore} – ${computerScore}`;
//         }
//     } 
// });

// THIS FUNCTION WAS USED IN THE V.1 TO PLAY 5 GAMES IN A ROW
// game();

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//         const playerSelection = getPlayerChoice();
//         const computerSelection = getComputerChoice();
//         console.log(playRound(playerSelection, computerSelection));
//         if (checkWinner(playerSelection, computerSelection) === "Player") {
//             playerScore++;
//         } else if (checkWinner(playerSelection, computerSelection) === "Computer") {
//             computerScore++;
//         }
//     console.log("Game Over");
//     if (playerScore > computerScore) {
//         console.log("Player wins!");
//     } else if (playerScore < computerScore) {
//         console.log("Computer wins :(");
//     }
//     console.log("---------------------------------");
// }
