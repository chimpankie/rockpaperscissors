function getComputerChoice(){
    let computerChoice = ""
    const choices = ["rock", "paper", "scissors"];
    computerChoice = choices[Math.floor(Math.random()*3)];
    return computerChoice
}


function game(){
    let playerScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++){
        let playerHand = prompt("What do you choose? Rock, Paper, or Scissors?");
        let computerHand = getComputerChoice();
        if (gameRound(playerHand, computerHand)==="win"){
            console.log("You win, you badass.");
            ++playerScore;
        } else if (gameRound(playerHand, computerHand)==="lose"){
            console.log("Hard luck.");
            ++computerScore;
        } else {
            console.log("Draw!");
        }


    }
    if (playerScore > computerScore){
        alert("You Win! Brewski Beer me.");
    } else {
        alert("You were beaten by an idiot computer.");
    }
            
 }


function gameRound(playerChoice, computerChoice){
    let playerHand = playerChoice.toLowerCase();
    let computerHand = computerChoice.toLowerCase(); 
    if (playerHand === computerHand){
        return "draw";
    } else if (playerHand === "rock"){
        if (computerHand === "scissors"){
            return "win";
        }
        if (computerHand === "paper"){
            return "lose";
        }
    } else if (playerHand ==="paper"){
        if (computerHand === "rock"){
            return "win";
        }
        if (computerHand === "scissors"){
            return "lose";
        }
    } else if (playerHand === "scissors"){
        if (computerHand === "rock"){
            return "lose";
        }
        if (computerHand === "paper"){
            return "win";
        }
    }
}