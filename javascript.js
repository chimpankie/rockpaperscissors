function getComputerChoice(){
    let computerChoice = ""
    const choices = ["rock", "paper", "scissors"];
    computerChoice = choices[Math.floor(Math.random()*3)];
    return computerChoice
}

function gameRound(playerChoice, computerChoice){
    let playerHand = playerChoice.toLowerCase();
    let computerHand = computerChoice.toLowerCase(); 
    if (playerHand === computerHand){
        return "draw";
    } else if (playerHand === "rock"){
        if (computerHand === "scissors"){
            return true;
        }
        if (computerHand === "paper"){
            return false;
        }
    } else if (playerHand ==="paper"){
        if (computerHand === "rock"){
            return true;
        }
        if (computerHand === "scissors"){
            return false;
        }
    } else if (playerHand === "scissors"){
        if (computerHand === "rock"){
            return false;
        }
        if (computerHand === "paper"){
            return true;
        }
    }
}