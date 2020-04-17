let playerChoice;
let computerChoice;

const choice = ['rock', 'paper', 'scissors'];

function computerChooses(){
    computerChoice = choice[Math.floor(Math.random() * 3)];
    return computerChoice;
}

function playerChooses(playersDecision){
    if(playersDecision == 'rock'){
        playerChoice = choice[0];
        return playerChoice;
    } else if(playersDecision == 'paper'){
        playerChoice = choice[1];
        return playerChoice;
    } else if(playersDecision == 'scissors'){
        playerChoice = choice[2];
        return playerChoice;
    }
    decideWinner();
}


function decideWinner(){
    if(playerChoice === choice)
}






