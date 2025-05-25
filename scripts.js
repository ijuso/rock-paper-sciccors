//globals
humanScore = 0;
computerScore = 0;


function randomNum(min, max) {
    return Math.round(Math.random() * (max - min) + min); //funktio random numerolle ja round method pyöristämään numeron
}

intNum = randomNum(1,3); //tallenetaan variableen intNum
console.log(intNum) //tarkista numero

function getComputerChoice() { //peli logiikka returnaa string valuen
if (intNum === 1) { 
    console.log("rock")
    return "rock"
} else if (intNum === 2) {
    console.log("paper")
    return "paper"
} else if (intNum === 3) {
    console.log("scissors")
    return "scissors"
}
}


function getHumanChoice() {
    choice = window.prompt("Choose either rock, paper or scissors");
    //console.log(choice);
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice().toLowerCase(); //tallentaa valuen gethumanchoice functiosta ja muuttaa sen lowercase
    console.log(humanChoice);
}

playRound();

window.onload = function what() {document.getElementById("main").innerHTML = getComputerChoice()}; //window.onload odotetaan DOM kokonaan lataamista jonka jälkeen suoritta function