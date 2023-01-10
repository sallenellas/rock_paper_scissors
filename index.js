//Creating Variables
const variables = ['rock', 'paper', 'scissors']

//Creating Prompt
let userChoice = prompt("Type 'R' for rock, 'P' for paper, or 'S' scissors?").toLowerCase();

//Testing If User Input Is Captured Properly
// if (userChoice === 'r'){
//     alert("0")
// }
// else if (userChoice === 'p'){
//     alert("1")
// }
// else if (userChoice === 's'){
//     alert("2")
// }
// else{
//     alert("Invalid Input")
// };

//Computer Choice Function
function randomChoice(choices) {
    let index = Math.floor(Math.random() * choices.length)
    return choices[index][0];
}

computerChoice = randomChoice(variables);

console.log(computerChoice);

// Tracking Wins/Losses
let wins = 0
let losses = 0

// Game Functionality
if (userChoice === 'r'){
    if (computerChoice === 'p'){
        alert('You Lose')
        losses += 1
    }
    else if (computerChoice = 's'){
        alert('You Win')
        wins += 1
    }
    else{
        alert("It's a Draw")
    }
}
else if (userChoice === 'p'){
    if (computerChoice === 's'){
        alert('You Lose')
        losses += 1
    }
    else if (computerChoice = 'r'){
        alert('You Win')
        wins += 1
    }
    else{
        alert("It's a Draw")
    }
}
else if (userChoice === 's'){
    if (computerChoice === 'r'){
        alert('You Lose')
        losses += 1
    }
    else if (computerChoice = 'p'){
        alert('You Win')
        wins += 1
    }
    else{
        alert("It's a Draw")
    }
}
