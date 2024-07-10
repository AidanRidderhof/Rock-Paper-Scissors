console.log("hello world")


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

console.log(getComputerChoice())