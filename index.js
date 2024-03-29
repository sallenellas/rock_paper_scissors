const buttons = document.querySelector('.buttons');
const results = document.querySelector('.results');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
const pChoice = document.querySelector('.playerChoice');
const cChoice = document.querySelector('.computerChoice');


// keeps track of score
var playerPoints = 0;
var computerPoints = 0;


//passes choices in and decides winner
const scoreboard = (playerChoice, computerChoice) => {

    switch (playerChoice){
        case('rock'):
        if (computerChoice === 'rock'){
            results.innerText = "It's A Tie";
        }
        else if (computerChoice === 'paper'){
            results.innerText = `You Lose! ${computerChoice.toUpperCase()} beats ${playerChoice.toUpperCase()}`;
            computerPoints++;
        }
        else{
            results.innerText = `You Win! ${playerChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`;
            playerPoints++;
        }
        break;
        case('paper'):
        if (computerChoice === 'paper'){
            results.innerText = "It's A Tie";
        }
        else if (computerChoice === 'scissors'){
            results.innerText = `You Lose! ${computerChoice.toUpperCase()} beats ${playerChoice.toUpperCase()}`;
            computerPoints++;
        }
        else{
            results.innerText = `You Win! ${playerChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`;
            playerPoints++;
        }
        break;
        case('scissors'):
        if (computerChoice === 'scissors'){
            results.innerText = "It's A Tie";
        }
        else if (computerChoice === 'rock'){
            results.innerText = `You Lose! ${computerChoice.toUpperCase()} beats ${playerChoice.toUpperCase()}`;
            computerPoints++;
        }
        else{
            results.innerText = `You Win! ${playerChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`;
            playerPoints++;
        }
        break;
    }
    pChoice.innerText = `You Chose: ${playerChoice.toUpperCase()}`;
    cChoice.innerText = `Computer Chose: ${computerChoice.toUpperCase()}`;
    playerScore.innerText = `Player: ${playerPoints}`;
    computerScore.innerText = `Computer: ${computerPoints}`;

}

// random choice generator for computer
const getComputerChoice = () => {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}


// round of game initiated with click of one of the buttons
buttons.addEventListener('click', (e) => {
    let player = e.target.value;
    console.log(player);
    let computer = getComputerChoice();
    console.log(computer);
    scoreboard(player, computer);
    
});
