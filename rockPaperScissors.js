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
    }   else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore += 1;
    }   else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore += 1; 
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
    //Assign the computer player a random value
    /*let getComputerChoice = () => getRandomNumber(1,3);
    let cpuChoice = getComputerChoice();

    //Assign numerical values for rock, paper, scissors
    if (cpuChoice == 1) {
        cpu = "rock";
    }   else if (cpuChoice == 2) {
        cpu = "paper";
    }   else if (cpuChoice == 3) {
        cpu = "scissors";
    }   else {
        cpu = "No Good";
    }*/

    // Prompt user to enter their choice
    //const buttons = document.querySelectorAll('button');
////////////////////////////////////////////////////////////////////////
    // we use the .forEach method to iterate through each button
    /*buttons.forEach((button) => {

        // and for each one we add a 'click' listener
        button.addEventListener('click', (clear) => {
            // Function to clear click event
            function clear() {
            console.log('Done');
            button.removeEventListener('click', clear)
        }
            //alert(button.id);
            if (button.id == 1) {
                userChoice = 'rock';
                if (userChoice == cpu) {
                    alert('Draw'); 
                    console.log(cpu);
                }   else if (userChoice == 'rock' && cpu == 'scissors') {
                    playerScore += 1; 
                    if (playerScore == 5) {
                        console.log('Player is the overall winner');
                    }
                    console.log('Winner');
                }   else if (userChoice == 'rock' && cpu == 'paper') {
                    computerScore += 1;
                    console.log('Loser');
                    if (computerScore == 5) {
                        console.log('Computer is the overall winner');
                    }
                }   else {
                    console.log('Something wrong');
                }
            } else if (button.id == 2) {
                userChoice = 'paper';
            } else if (button.id == 3) {
                userChoice = 'scissors';
            } else {
                alert('Invalid choice! Restart the game and try again.');
            }
        });
    });*/
    
    // Check to see who is the winner and add how many times the player and computer wins/loses
    /* if (userChoice == cpu) {
        alert(`Draw! The computer chose ${cpu}.`)
    }   else if (userChoice == "rock" && cpu == "scissors") {
        alert(`You win! The computer chose ${cpu}.`);
        return ++playerScore;
    }   else if (cpu == "rock" && userChoice == "scissors") {
        alert(`You lose! The computer chose ${cpu}.`);
        return ++computerScore;
    }   else if (userChoice == "rock" && cpu == "paper") {
        alert(`You lose! The computer chose ${cpu}.`);
        return ++computerScore;
    }   else if (cpu == "rock" && userChoice == "paper") {
        alert(`You win! The computer chose ${cpu}.`);
        playerScore = ++playerScore;
    }   else if (cpu == "scissors" && userChoice == "paper") {
        alert(`You lose! The computer chose ${cpu}.`);
        return ++computerScore;
    }   else if (userChoice == "scissors" && cpu == "paper") {
        alert(`You win! The computer chose ${cpu}.`);
        playerScore = ++playerScore;
    }   else {
        alert("Something is wrong! Retry the game.")
    }*/


//    playRound();
// Play 5 rounds
/*for (let step = 0; step < 1; step++) {
    computerPlay();
    playRound();
}*/
/*
// Determine the winner after 5 rounds
if (playerScore == computerScore) {
    alert(`Tie! Play again to find a winner.`)
}   else if (playerScore > computerScore) {
    alert(`You win! You are the winner of 5 rounds.`)
}   else if (playerScore < computerScore) {
    alert(`You lose! The computer is the winner of 5 rounds.`)
}   else {
    alert("Something is wrong! Retry the game.")
}*/