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

let restartBtn = document.querySelector('#restartBtn');

restartBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("overlay").style.display = "none";
    playerCounter.textContent = "0";
    computerCounter.textContent = "0";
    result.textContent = "You must win five times to succeed";
})




function game(player){
        let computerHand = getComputerChoice();
        let playerHand = player;
        if (gameRound(playerHand, computerHand)==="win"){
            const myTimeout = setTimeout(function(){
                computerDiv.textContent = computerHand;
                result.textContent = 'YOU WIN';
                return;
            }, 500);
            ++playerScore;
            playerCounter.textContent = playerScore;
            if (playerScore === 5){
                whoWins("You have defeated AI! CHATGPT is no more.");
            }
        } else if (gameRound(playerHand, computerHand)==="lose"){
            const myTimeout = setTimeout(function(){
                computerDiv.textContent = computerHand;
                result.textContent = 'YOU LOSE';
                return;
            }, 500)
            ++computerScore;
            computerCounter.textContent = computerScore
            if (computerScore === 5){
                whoWins("You have failed humanity. CHATGPT rules supreme.");
            }
        } else {
            const myTimeout = setTimeout(function(){
                computerDiv.textContent = computerHand;
                result.textContent = 'YOU DRAW';
                return;
            }, 500)
            console.log(gameRound(playerHand, computerHand));
         
        }  
 }

function whoWins(winner){
    console.log(winner);
    document.getElementById("overlay").style.display = "block";
    document.getElementById("finalResult").textContent = winner;
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