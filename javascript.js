const choices = ["Rock", "Paper", "Scissors"];

const computerPlay = () => choices[Math.floor(Math.random()*3)];

const proper = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

const playRound = (playerSelection, computerSelection) => {
    
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "Paper") {
            return 'lose';
        } else if (computerSelection === "Scissors") {
            return 'win';
        } else return 'tie';
    }

    if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "Paper") {
            return 'tie';
        } else if (computerSelection === "Scissors") {
            return 'lose';
        } else return 'win';
    }

    if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "Paper") {
            return 'win';
        } else if (computerSelection === "Scissors") {
            return 'tie';
        } else return 'lose';
    }
}



const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let streak = false;

    for (let i = 0; i < 5; i++) {
        let playerSelection = (prompt("Your turn! Select ROCK, PAPER, or SCISSORS:")); 
        const computerSelection = computerPlay();

        playerSelection = proper(playerSelection);
        
        if (playRound(playerSelection, computerSelection) === 'lose') {
            streak = false;
            computerScore++;
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        } else if (playRound(playerSelection, computerSelection) === 'win' && streak) {
            playerScore++;
            console.log(`Wow pretty good! You win! ${playerSelection} beats ${computerSelection}`)
        }
        else if (playRound(playerSelection, computerSelection) === 'win') {
            streak = true;
            playerScore++;
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        } else {
            streak = false;
            console.log('Tie Game');
        }
    }

    let score = `User: ${playerScore} Computer: ${computerScore}.`;

    if (playerScore > computerScore) {
        console.log(`${score} You win!`);
    } else if (playerScore < computerScore) {
        console.log(`${score} Computer wins!`);
    } else {
        console.log(`${score} Tie game.`);
    } 
};


game();