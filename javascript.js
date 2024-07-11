
console.log(playGame());

function getComputerChoice() {
    let x = Math.random();
    if (x<.34) {
        return "Rock"
    }

    else if (x<.67) {
        return "Paper"
    }

    else {
        return "Scissors"
    }
}

function getHumanChoice(){
    let choice = prompt("Rock, Paper, or Scissors?");
    choice = choice.toUpperCase();
    while (true) {
        if (choice==="ROCK" || choice==="PAPER" || choice==="SCISSORS") {
            return choice;
        }
        else {
            choice = prompt("Rock, Paper, or Scissors?");
            choice = choice.toUpperCase();
        }
    }
}

function playGame () {
    /*variables*/
    let humanScore=0;
    let computerScore=0;

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    let x;

    while (true) {

        x = playRound(computerSelection, humanSelection);

        if (x===1) {
            humanScore++;
        }
    
        else if (x===2) {
            computerScore++;
        }
        console.log("Current score: " +humanScore+ ", " +computerScore);

        if (humanScore>=5) {
            return "You Won!";
        }
        else if (computerScore>=5) {
            return "Better Luck Next Time";
        }

        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

    }

    /*playRound function*/
    function playRound(computerChoice, humanChoice) {
        /* 1-win, 2-lose, 3-tie*/
        /*Rock Route*/
        if (humanChoice==="ROCK") {
            if (computerChoice==="Rock") {
                console.log("Tie");
                return 3;
            }
            else if (computerChoice==="Paper") {
                console.log("Rock loses to paper");
                return 2;
            }
    
            else if (computerChoice==="Scissors") {
                console.log("Rock beats scissors");
                return 1
            }
        }
        /*Paper Route*/
        else if (humanChoice==="PAPER") {
            if (computerChoice==="Rock") {
                console.log("Paper beats rock");
                return 1;
            }
            else if (computerChoice==="Paper") {
                console.log("Tie");
                return 3;
            }
    
            else if (computerChoice==="Scissors") {
                console.log("Paper loses to Scissors");
                return 2;
            }
        }
    
        /*Scissors Route*/
        if (humanChoice==="SCISSORS") {
            if (computerChoice==="Rock") {
                console.log("Scissors loses to rock");
                return 2;
            }
            else if (computerChoice==="Paper") {
                console.log("Scissors beat paper");
                return 1;
            }
    
            else if (computerChoice==="Scissors") {
                console.log("Tie");
                return 3;
            }
        }
    }

}


