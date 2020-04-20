let playerChoice = undefined;
let computerChoice = undefined;

const choice = ['rock', 'paper', 'scissors'];

function computerChooses(){
    computerChoice = choice[Math.floor(Math.random() * 3)];
    return computerChoice;
}

function playerChooses(playersDecision){
    if(playersDecision === 'rock'){
        playerChoice = choice[0];
    } else if(playersDecision === paper){
        playerChoice = choice[1];
    } else if(playersDecision === scissors){
        playerChoice = choice[2];
    }
    return playerChoice;
    computerChooses();
    decideWinner(playerChoice, computerChoice);
}

let outcome = undefined;

//// figure out display result, and calling it
// const displayResult = (outcome) => {
//     if(outcome === 'tie'){
//         if(playerChoice === choice[0]){
//             let tieDoc = document.getElementById('rockResult').style.display = "inline";
//         }else if(playerChoice === choice[1]){
//             let tieDoc = document.getElementById('paperResult').style.display = "inline";
//         }else if(playerChoice === choice[2]){
//             let tieDoc = document.getElementById('scissorsResult').style.display = "inline";
//         }
//     }else if(outcome === 'computerLoss'){
//         if(playerChoice === choice[0]){
//             let playerDoc = document.getElementById('rockResult').style.display = "inline";
//         }else if(playerChoice === choice[1]){
//             let playerDoc = document.getElementById('paperResult').style.display = "inline";
//         }else if(playerChoice === choice[2]){
//             let playerDoc = document.getElementById('scissorsResult').style.display = "inline";
//         }
//         if(computerChoice === choice[0]){
//             let computerDoc = document.getElementById('rockResult').style.display = "inline";
//         }else if(computerChoice === choice[1]){
//             let computerDoc = document.getElementById('paperResult').style.display = "inline";
//         }else if(computerChoice === choice[2]){
//             let computerDoc = document.getElementById('scissorsResult').style.display = "inline";
//         }
//     }else if(outcome === 'playerLoss'){
//         if(playerChoice === choice[0]){
//             let playerDoc = document.getElementById('rockResult').style.display = "inline";
//         }else if(playerChoice === choice[1]){
//             let playerDoc = document.getElementById('paperResult').style.display = "inline";
//         }else if(playerChoice === choice[2]){
//             let playerDoc = document.getElementById('scissorsResult').style.display = "inline";
//         }
//         if(computerChoice === choice[0]){
//             let computerDoc = document.getElementById('rockResult').style.display = "inline";
//         }else if(computerChoice === choice[1]){
//             let computerDoc = document.getElementById('paperResult').style.display = "inline";
//         }else if(computerChoice === choice[2]){
//             let computerDoc = document.getElementById('scissorsResult').style.display = "inline";
//         }
//     }
// }






const finalResult = (outcome) => {
    if(outcome === 'tie'){
        let playerDoc = document.getElementById('choices').style.visibility='hidden';
    }
    if(outcome === 'playerLoss'){
        let playerDoc = document.getElementById('choices').style.visibility='hidden';
    }
    if(outcome === 'computerLoss'){
        let playerDoc = document.getElementById('choices').style.visibility='hidden';
    }
    displayResult(outcome)
}


function decideWinner(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
        outcome = 'tie';
    }else if(playerChoice === choice[0]){
        if(computerChoice === choice[1]){
            outcome = 'playerLoss';
         }else if(computerChoice === choice[2]){
             outcome = 'computerLoss';
         }
    }else if(playerChoice === choice[1]){
        if(computerChoice === choice[0]){
            outcome = 'computerLoss'
        }else if(computerChoice === choice [2]){
            outcome = 'playerLoss';
        }
    }else if(playerChoice === choice[2]){
        if(computerChoice === choice[0]){
            outcome = 'playerLoss';
        }else if(computerChoice === choice[1]){
            outcome = 'computerLoss';
        }
    }


    finalResult(outcome)
    
}



