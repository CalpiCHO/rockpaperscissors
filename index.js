function getComputerChoice() {
    computerSelection = Math.floor(Math.random() * 3) + 1
    // switch (num) {
    //     case 1:
    //         ans = "rock";
    //         break;
    //     case 2: 
    //         ans = "paper";
    //         break;
    //     case 3:
    //         ans = "scissors";
    //         break;
    // }
    return computerSelection;
}

function playerSelection() {
    rps = prompt("Please choose rock, paper, or scissors!").toLowerCase();
    switch (rps) {
        case "rock":
            playerSelection = 1;
            break;
        case "paper":
            playerSelection = 2;
            break;
        case "scissors": 
        playerSelection = 3;
            break;
        default:
            alert("Oops! You entered something incorrectly! Try again")
            break;
    }
    return playerSelection
}

// rock = 1
// paper = 2
// scissors = 3

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 1 && computerSelection === 1) {
        alert("Rock ties rock! Try again!")
    }

    if (playerSelection === 1 && computerSelection === 2) {
        alert("Paper beats rock! You lose!")
    }

    if (playerSelection === 1 && computerSelection === 3) {
        alert("Rock beats scissors! You win!")
    }

    if (playerSelection === 2 && computerSelection === 1) {
        alert("Paper beats rock! You win!")
    }

    if (playerSelection === 2 && computerSelection === 2) {
        alert("Paper ties paper! Try again!")
    }

    if (playerSelection === 2 && computerSelection === 3) {
        alert("Scissors beats paper! You lose!")
    }

    if (playerSelection === 3 && computerSelection === 1) {
        alert("Rock beats scissors! You lose!")
    }

    if (playerSelection === 3 && computerSelection === 2) {
        alert("Scissors beats paper! You win!")
    }

    if (playerSelection === 3 && computerSelection === 3) {
        alert("Scissors ties scissors! Try again!")
    }
}