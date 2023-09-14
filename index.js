function getComputerChoice() {
    num = Math.floor(Math.random() * 3) + 1
    switch (num) {
        case 1:
            ans = "rock";
            break;
        case 2: 
            ans = "paper";
            break;
        case 3:
            ans = "scissors";
            break;
    }
    return ans;
}