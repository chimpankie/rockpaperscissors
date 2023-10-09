function getComputerChoice(){
    let computerChoice = ""
    const choices = ["rock", "paper", "scissors"];
    computerChoice = choices[Math.floor(Math.random()*3)];
    return computerChoice
}

let weaponChoice = document.querySelectorAll('.weapon');
weaponChoice.forEach(function(weaponChoice) {
    weaponChoice.addEventListener('click', function() {
    game(weaponChoice.textContent);

    }
    )
    });


function game(weaponChoice){
        let computerHand = getComputerChoice();
        console.log(computerHand);
        let playerHand = weaponChoice;
        console.log(playerHand);
        if (gameRound(playerHand, computerHand)==="win"){
            console.log("You win, you badass.");
            ++playerScore;
        } else if (gameRound(playerHand, computerHand)==="lose"){
            console.log("Hard luck.");
            ++computerScore;
        } else {
            console.log(gameRound(playerHand, computerHand));
            console.log("Draw!");
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