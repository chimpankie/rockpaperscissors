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

let playerDiv = document.querySelector('.player');
let computerDiv = document.querySelector('.computer');
let result = document.querySelector('.outcome');




function game(player){
        let computerHand = getComputerChoice();
        let playerHand = player;
        if (gameRound(playerHand, computerHand)==="win"){
            const myTimeout = setTimeout(function(){
                computerDiv.textContent = computerHand;
                result.textContent = 'YOU WIN';
                return;
            }, 1000);
            ++playerScore;
            playerCounter.textContent = playerScore;
        } else if (gameRound(playerHand, computerHand)==="lose"){
            const myTimeout = setTimeout(function(){
                computerDiv.textContent = computerHand;
                result.textContent = 'YOU LOSE';
                return;
            }, 1000)
            ++computerScore;
            computerCounter.textContent = computerScore
        } else {
            const myTimeout = setTimeout(function(){
                computerDiv.textContent = computerHand;
                result.textContent = 'YOU DRAW';
                return;
            }, 1000)
            console.log(gameRound(playerHand, computerHand));
         
        }  
 }




function gameRound(playerChoice, computerChoice){
    let playerHand = playerChoice.toLowerCase();
    let computerHand = computerChoice.toLowerCase(); 
    playerDiv.textContent = playerHand;
    result.textContent = "Waiting...";
    computerDiv.textContent = 'Calculating...'
   

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