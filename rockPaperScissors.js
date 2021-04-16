//Create a random number between 1 - 3
const getRandomNumber = (min,max) => Math.floor(Math.random() * (max-min + 1)) + min;

// Keeps track of the score
let playerScore = 0;
let computerScore = 0;

// Prompt user to enter their choice
const buttons = document.querySelectorAll('button');

function computerPlay() {
    const choices = ['rock','paper','scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

//Function for single round of Rock Paper Scissors
function playRound(playerSelection) {
    let computerSelection = computerPlay();
    if (playerSelection == computerSelection) {
        alert('Draw');
    }   else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')) {
        playerScore += 1;
        console.log(`You win, ${playerSelection} beats ${computerSelection}.`);
        document.getElementById('player').innerHTML = `Player's score is: ${playerScore}`;
            if (playerScore == 5) {
                console.log('You are the winner after 5 rounds!');
            }   
    }   else if ((computerSelection == 'rock' && playerSelection == 'scissors') || (computerSelection == 'paper' && playerSelection == 'rock') || (computerSelection == 'scissors' && playerSelection == 'paper')) {
        computerScore += 1; 
        console.log(`You lose, ${computerSelection} beats ${playerSelection}.`);
        document.getElementById('opponent').innerHTML = `Opponent's score is: ${computerScore}`;
            if (computerScore == 5) {
                console.log('You are the winner after 5 rounds!');
            } 
    }   else {
        console.log('Something wrong');
    }
}

buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        playRound(button.value);
    });
});
