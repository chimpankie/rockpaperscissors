function getComputerChoice(){
    let computerChoice = ""
    const choices = ["rock", "paper", "scissors"];
    computerChoice = choices[Math.floor(Math.random()*3)];
    return computerChoice
}



let playerScore = 0;
let computerScore = 0;

let playerCounter = document.querySelector('#playerScore');
let computerCounter = document.querySelector('#computerScore');
    


function game(player){
        let computerHand = getComputerChoice();
        let playerHand = player;
        if (gameRound(playerHand, computerHand)==="win"){
            console.log("You win, you badass.");
            ++playerScore;
            playerCounter.textContent = playerScore;
        } else if (gameRound(playerHand, computerHand)==="lose"){
            console.log("Hard luck.");
            ++computerScore;
            computerCounter.textContent = computerScore
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

let weaponChoice = document.querySelectorAll('.weapon');
weaponChoice.forEach((weapon) => {
    weapon.addEventListener('click', () => {
        console.log(weapon.value);
        console.log(weapon.textContent);
        let weapon2 = weapon.value;
        game(weapon2);
    })
})