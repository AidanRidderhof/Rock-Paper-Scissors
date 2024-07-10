console.log("hello world")
let humanScore=0;
let computerScore=0;


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

function playRound() {

}

console.log(getHumanChoice());