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

function playerSelect() {
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
        console.log("Rock ties rock! Try again!")
        str = "Rock ties rock! Try again!"
        return str
    }

    if (playerSelection === 1 && computerSelection === 2) {
        console.log("Paper beats rock! You lose!")
        str = "Paper beats rock! You lose!"
        return str
    }

    if (playerSelection === 1 && computerSelection === 3) {
        console.log("Rock beats scissors! You win!")
        str = "Rock beats scissors! You win!"
        return str
    }

    if (playerSelection === 2 && computerSelection === 1) {
        console.log("Paper beats rock! You win!")
        str = "Paper beats rock! You win!"
        return str
    }

    if (playerSelection === 2 && computerSelection === 2) {
        console.log("Paper ties paper! Try again!")
        str = "Paper ties paper! Try again!"
        return str
    }

    if (playerSelection === 2 && computerSelection === 3) {
        console.log("Scissors beats paper! You lose!")
        str = "Scissors beats paper! You lose!"
        return str
    }

    if (playerSelection === 3 && computerSelection === 1) {
        console.log("Rock beats scissors! You lose!")
        str = "Rock beats scissors! You lose!"
        return str
    }

    if (playerSelection === 3 && computerSelection === 2) {
        console.log("Scissors beats paper! You win!")
        str = "Scissors beats paper! You win!"
        return str
    }

    if (playerSelection === 3 && computerSelection === 3) {
        console.log("Scissors ties scissors! Try again!")
        str = "Scissors ties scissors! Try again!"
        return str
    }
    
}

function game() {
    for (let step = 0; step < 5; step++) {
        getComputerChoice()
        playerSelect()
        playRound(playerSelection, computerSelection)
        ans = str;
        
        if (ans == "Rock beats scissors! You win!" || ans == "Paper beats rock! You win!" || ans == "Scissors beats paper! You win!") {
            pp = 1 + p++;
            console.log(pp)
        }

        if (ans == "Paper beats rock! You lose!" || ans == "Scissors beats paper! You lose!" || ans == "Rock beats scissors! You lose!") {
            cc = 1 + c++;
            console.log(cc)
        }
    }
    
    alert("The score is You:" + " " + pp + " " + "Computer:" + " " + cc)
    
}