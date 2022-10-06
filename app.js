const computerChoiceDisplay = document.getElementById('comp-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');

let userChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult()
}))

function generateComputerChoice(){
    const randNum = Math.floor(Math.random() * 3) + 1;
    console.log(randNum);

    if(randNum === 1){
        compChoice = 'rock';
    }
    
    if(randNum === 2){
        compChoice = 'paper';
    }
    if(randNum === 3){
        compChoice = 'scissors';
    }

    computerChoiceDisplay.innerHTML = compChoice;
}

function getResult(){
    if(compChoice == userChoice){
        result = 'Its a draw!'
   }
   
   if((compChoice == 'rock' && userChoice == 'paper')
    || (compChoice == 'paper' && userChoice == 'scissors')
     || (compChoice == 'scissors' && userChoice == 'rock')){
    result = 'You WIN!'
    }
    if((compChoice == 'rock' && userChoice == 'scissors')
    || (compChoice == 'paper' && userChoice == 'rock')
     || (compChoice == 'scissors' && userChoice == 'paper')){
    result = 'You LOSE!'
    }
    resultDisplay.innerHTML = result;
}