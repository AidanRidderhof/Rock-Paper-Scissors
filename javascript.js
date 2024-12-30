let buttons = document.querySelectorAll("button");
let computerSelection = getComputerChoice();
let result = document.querySelector("#result");
let para = document.createElement("p");
let hs = 0;
let cs = 0;

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

/*playRound function*/
function playRound(computerChoice, humanChoice) {
    /*displays results*/
    para.textContent=humanChoice+" - "+computerChoice;
    result.appendChild(para);

    /* 1-win, 2-lose, 3-tie*/
    /*Rock Route*/
    humanChoice = humanChoice.toUpperCase();
    
    if (humanChoice==="ROCK") {
        if (computerChoice==="Rock") {
            console.log("Tie");
            return 3;
        }
        else if (computerChoice==="Paper") {
            console.log("Rock loses to paper");
            cs++;
            document.getElementById('cs').textContent = cs;
            return 2;
        }

        else if (computerChoice==="Scissors") {
            console.log("Rock beats scissors");
            hs++;
            document.getElementById('hs').textContent = hs;
            return 1
        }
    }
    /*Paper Route*/
    else if (humanChoice==="PAPER") {
        if (computerChoice==="Rock") {
            console.log("Paper beats rock");
            hs++;
            document.getElementById('hs').textContent = hs;
            return 1;
        }
        else if (computerChoice==="Paper") {
            console.log("Tie");
            return 3;
        }

        else if (computerChoice==="Scissors") {
            console.log("Paper loses to Scissors");
            cs++;
            document.getElementById('cs').textContent = cs;
            return 2;
        }
    }

    /*Scissors Route*/
    if (humanChoice==="SCISSORS") {
        if (computerChoice==="Rock") {
            console.log("Scissors loses to rock");
            cs++;
            document.getElementById('cs').textContent = cs;
            return 2;
        }
        else if (computerChoice==="Paper") {
            console.log("Scissors beat paper");
            hs++;
            document.getElementById('hs').textContent = hs;
            return 1;
        }

        else if (computerChoice==="Scissors") {
            console.log("Tie");
            return 3;
        }
    }
}




