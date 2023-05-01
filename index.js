

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const buttons = document.querySelectorAll('button');


const getComputerChoice = () => {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

const getPlayerChoice = () => {
    
    let playerChoice;

    rock.addEventListener('click', () => {
        playerChoice = rock.value;
    });
    paper.addEventListener('click', () => {
        playerChoice = paper.value;
    });
    scissors.addEventListener('click', () => {
        playerChoice = scissors.value;
    });

    return playerChoice;
}



// button.addEventListener('click', () => {
//     let playerChoice;
//     switch(button.id){
//         case 'rock':
//             console.log('rock');
//             break;
//         case 'paper':
//             console.log('pape');
//             break;
//         case 'scissors':
//             console.log('scissors');
//             break;
//     }
// });


console.log(getComputerChoice());

console.log(getPlayerChoice());
