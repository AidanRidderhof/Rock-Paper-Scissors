let buttons = document.querySelectorAll("button");
let computerSelection = getComputerChoice();
let result = document.querySelector("#result");
let para = document.createElement("p");
let Victory = document.createElement("p");
let hs = 0;
let cs = 0;
let Win = document.createElement("p");
let score = document.querySelector("#score");

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


function checkWin(cs, hs) {
    if (hs==5) {
        Win.textContent="You won! Congratulations!";
        score.appendChild(Win);
    }

    else if (cs==5){
        Win.textContent="The computer won!";
        score.appendChild(Win);
    }
    return 1;
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
            checkWin(cs, hs);
            return 2;
        }

        else if (computerChoice==="Scissors") {
            console.log("Rock beats scissors");
            hs++;
            document.getElementById('hs').textContent = hs;
            checkWin(cs, hs);
            return 1
        }
    }
    /*Paper Route*/
    else if (humanChoice==="PAPER") {
        if (computerChoice==="Rock") {
            console.log("Paper beats rock");
            hs++;
            document.getElementById('hs').textContent = hs;
            checkWin(cs, hs);
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
            checkWin(cs, hs);
            return 2;
        }
    }

    /*Scissors Route*/
    if (humanChoice==="SCISSORS") {
        if (computerChoice==="Rock") {
            console.log("Scissors loses to rock");
            cs++;
            document.getElementById('cs').textContent = cs;
            checkWin(cs, hs);
            return 2;
        }
        else if (computerChoice==="Paper") {
            console.log("Scissors beat paper");
            hs++;
            document.getElementById('hs').textContent = hs;
            checkWin(cs, hs);
            return 1;
        }

        else if (computerChoice==="Scissors") {
            console.log("Tie");
            return 3;
        }
    }

    /*check score*/
    if (hs==5) {
        Victory.textContent="You wins!";
        document.body.appendChild(Victory);
    }

    else if (cs==5) {
        Victory.textContent="The computer wins!";
        document.body.appendChild(Victory);
    }
}




