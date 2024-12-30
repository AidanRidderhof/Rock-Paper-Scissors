let buttons = document.querySelectorAll("button")
let computerSelection = getComputerChoice()
let result = document.querySelector("#result");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
      computerSelection = getComputerChoice();
      playRound(computerSelection, button.id);
    });
  });


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

/*function getHumanChoice(){
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
*/
/*playRound function*/
function playRound(computerChoice, humanChoice) {
    /*displays results*/
    para.textContent=humanChoice+" - "+computerChoice;
    result.appendChild(para);
    /* 1-win, 2-lose, 3-tie*/
    /*Rock Route*/
    if (humanChoice==="Rock") {
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
    else if (humanChoice==="Paper") {
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
    if (humanChoice==="Scissors") {
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




