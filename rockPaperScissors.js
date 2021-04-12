//Create a random number between 1 - 3
const getRandomNumber = (min,max) => Math.floor(Math.random() * (max-min + 1)) + min;

// Keeps track of the score
let playerScore = 0;
let computerScore = 0;

//Function for single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    //Assign the computer player a random value
    let getComputerChoice = () => getRandomNumber(1,3);
    let computerPlay = getComputerChoice();

    //Assign numerical values for rock, paper, scissors
    if (computerPlay == 1) {
        result = "rock";
    }   else if (computerPlay == 2) {
        result = "paper";
    }   else if (computerPlay == 3) {
        result = "scissors";
    }   else {
        result = "No Good";
    }

    // Prompt user to enter their choice
    //let userChoice = window.prompt("Rock, Paper, Scissors? (enter your choice)");
    const buttons = document.querySelectorAll('button');

    // we use the .forEach method to iterate through each button
    buttons.forEach((button) => {

        // and for each one we add a 'click' listener
        button.addEventListener('click', () => {
            //alert(button.id);
            if (button.id == 1) {
                userChoice = 'rock';
                if (userChoice == result) {
                    alert('Draw'); 
                    console.log(result);
                }   else if (userChoice == 'rock' && result == 'scissors') {
                    playerScore += 1; 
                    console.log('Winner');
                }   else if (userChoice == 'rock' && result == 'paper') {
                    computerScore += 1;
                    console.log('Loser');
                }   else {
                    console.log('Something wrong');
                }
            } else if (button.id == 2) {
                console.log('Paper');
            } else if (button.id == 3) {
                console.log('scissors');
            } else {
                alert('Invalid choice! Restart the game and try again.');
            }
        });
    });

    // Check to see who is the winner and add how many times the player and computer wins/loses
    /*if (userChoice == result) {
        alert(`Draw! The computer chose ${result}.`)
    }   else if (userChoice == "rock" && result == "scissors") {
        alert(`You win! The computer chose ${result}.`);
        return ++playerScore;
    }   else if (result == "rock" && userChoice == "scissors") {
        alert(`You lose! The computer chose ${result}.`);
        return ++computerScore;
    }   else if (userChoice == "rock" && result == "paper") {
        alert(`You lose! The computer chose ${result}.`);
        return ++computerScore;
    }   else if (result == "rock" && userChoice == "paper") {
        alert(`You win! The computer chose ${result}.`);
        playerScore = ++playerScore;
    }   else if (result == "scissors" && userChoice == "paper") {
        alert(`You lose! The computer chose ${result}.`);
        return ++computerScore;
    }   else if (userChoice == "scissors" && result == "paper") {
        alert(`You win! The computer chose ${result}.`);
        playerScore = ++playerScore;
    }   else {
        alert("Something is wrong! Retry the game.")
    }*/
}

    playRound();
// Play 5 rounds
/*for (let step = 0; step < 5; step++) {
    playRound();
}

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