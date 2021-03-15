//Create a random number between 1 - 3
const getRandomNumber = (min,max) => Math.floor(Math.random() * (max-min + 1)) + min;

//Assign the computer player a random value
const getComputerChoice = () => getRandomNumber(1,3);
const computerPlay = getComputerChoice();

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
let userChoice = window.prompt("Rock, Paper, Scissors? (enter your choice)");
if (userChoice.toLowerCase() == "rock") {
    userChoice = "rock";
}   else if (userChoice.toLowerCase() == "paper") {
    userChoice = "paper";
}   else if (userChoice.toLowerCase() == "scissors") {
    userChoice = "scissors";
}   else {
    alert("Invalid choice! Restart the game and try again.")
}

//Function for single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    if (userChoice == result) {
        alert(`Draw! The computer chose ${result}.`)
    }   else if (userChoice == "rock" && result == "scissors") {
        alert(`You win! The computer chose ${result}.`);
    }   else if (result == "rock" && userChoice == "scissors") {
        alert(`You lose! The computer chose ${result}.`);
    }   else if (userChoice == "rock" && result == "paper") {
        alert(`You lose! The computer chose ${result}.`);
    }   else if (result == "rock" && userChoice == "paper") {
        alert(`You win! The computer chose ${result}.`);
    }   else if (result == "scissors" && userChoice == "paper") {
        alert(`You lose! The computer chose ${result}.`);
    }   else if (userChoice == "scissors" && result == "paper") {
        alert(`You win! The computer chose ${result}.`);
    }   else {
        alert("Something is wrong! Retry the game.")
    }
    }   

playRound();