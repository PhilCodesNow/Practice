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
    if(playerChoice === computerChoice){
        return 'tie';
        console.log('tie');
    }else if(playerChoice === choice[0]){
        return computerChoice === choice[1] ? 'playerLoss'
        : computerChoice === choice[2] ; 'computerLoss'
    }else if(playerChoice === choice[1]){
        return computerChoice === choice[0] ; 'computerLoss'
        : computerChoice === choice [2] ; 'playerLoss'
    }else if(playerChoice === choice[2]){
         computerChoice === choice[0] ; 'playerLoss'
        : computerChoice === choice[1] ; 'computerLoss'
    }
}




