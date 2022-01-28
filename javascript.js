const choices = ["Rock", "Paper", "Scissors"];

const computerPlay = () => choices[Math.floor(Math.random()*3)];

const proper = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

let userScore = 0;
let cpuScore = 0;
let gameMessage;

const playRound = (playerSelection, computerSelection) => {
    
    let cpuPick = `Computer picks ${computerSelection}`;
    let cpuWin = `${cpuPick}. ${computerSelection} beats ${proper(playerSelection)}. You lose!`;
    let userWin = `${cpuPick}. ${proper(playerSelection)} beats ${computerSelection}. You win!`;

    if (playerSelection === "rock") {
        if (computerSelection === "Paper") {
            gameMessage = cpuWin;
            cpuScore++;
        } else if (computerSelection === "Scissors") {
            gameMessage = userWin;
            userScore++;
            console.log(cpuScore);
        } else gameMessage = `${cpuPick}. Tie game!`;
    }

    if (playerSelection === "paper") {
        if (computerSelection === "Paper") {
            gameMessage = `${cpuPick}. Tie game!`;
        } else if (computerSelection === "Scissors") {
            gameMessage = cpuWin;
            cpuScore++;
        } else {
            gameMessage = userWin;
            userScore++;
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "Paper") {
            gameMessage = userWin;
            userScore++;
        } else if (computerSelection === "Scissors") {
            gameMessage = `${cpuPick}. Tie game!`;
        } else {
            gameMessage = cpuWin;
            cpuScore++;
        }
    }
};


const userDiv = document.querySelector(".user-score");

const userScoreDiv = document.createElement('div');
userScoreDiv.textContent = userScore;
userDiv.appendChild(userScoreDiv);

const cpuDiv = document.querySelector(".cpu-score");

const cpuScoreDiv = document.createElement('div');
cpuScoreDiv.textContent = cpuScore;
cpuDiv.appendChild(cpuScoreDiv);

const spacer = document.querySelector(".spacer");
const docMessage = document.createElement('div');

function userSelect(e) {

    const userPlay = `${this.id}`
    playRound(userPlay,computerPlay());

    if (userScore == 5) {
        alert("You scored 5 points. Great job! You Win!");
        userScore = 0;
        cpuScore = 0;
        gameMessage = "Game Over";
    }

    if (cpuScore == 5) {
        alert("Computer scored 5 points. Computer wins! Better luck next time.");
        userScore = 0;
        cpuScore = 0;
        gameMessage = "Game Over";
    }

    docMessage.textContent = gameMessage;
    spacer.appendChild(docMessage);
    userScoreDiv.textContent = userScore;
    userDiv.appendChild(userScoreDiv);

    cpuScoreDiv.textContent = cpuScore;
    cpuDiv.appendChild(cpuScoreDiv);
    
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener("click", userSelect));



