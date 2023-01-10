//Creating Variables
const variables = ['rock', 'paper', 'scissors']

//Creating Prompt
let userChoice = prompt("Type 'R' for rock, 'P' for paper, or 'S' scissors?").toLowerCase();

//Testing If User Input Is Captured Properly
if (userChoice === 'r'){
    alert("0")
}
else if (userChoice === 'p'){
    alert("1")
}
else if (userChoice === 's'){
    alert("2")
}
else{
    alert("Invalid Input")
};

