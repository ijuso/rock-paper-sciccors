//globals
humanScore = 0;
computerScore = 0;

function randomNum(min, max) {
    return Math.round(Math.random() * (max - min) + min); //funktio random numerolle ja round method pyöristämään numeron
}

intNum = randomNum(1,3); //tallenetaan variableen intNum

function getComputerChoice() { //peli logiikka returnaa string valuen
if (intNum === 1) { 
    return "rock"
} else if (intNum === 2) {
    return "paper"
} else if (intNum === 3) {
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
    console.log("You chose: "+humanChoice);

    computerChoice = getComputerChoice();
    console.log("You chose: "+computerChoice);

    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        console.log("-----------------------------------------------------------------------------");
        console.log("You WIN YAHUUUUUUU!!!! ROCK BEATS SCISSORS!!");
        console.log("-----------------------------------------------------------------------------");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        console.log("-----------------------------------------------------------------------------");
        console.log("YOU LOOOOSEEEEE!! PAPER BEATS ROCK!!");
        console.log("-----------------------------------------------------------------------------");
    } else if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("-----------------------------------------------------------------------------");
        console.log("BOOORING IT'S A TIE")
        console.log("-----------------------------------------------------------------------------");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("-----------------------------------------------------------------------------");
        console.log("You WIN YAHUUUUUUU!!!! PAPER BEATS ROCK!!");
        console.log("-----------------------------------------------------------------------------");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        console.log("-----------------------------------------------------------------------------");
        console.log("YOU LOOOOSEEEEE!! PAPER LOSSES TO SCISSORS!!");
        console.log("-----------------------------------------------------------------------------");
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("-----------------------------------------------------------------------------");
        console.log("BOOORING IT'S A TIE");
        console.log("-----------------------------------------------------------------------------");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log("-----------------------------------------------------------------------------");
        console.log("You WIN YAHUUUUUUU!!!! SCISSORS BEATS PAPER!!");
        console.log("-----------------------------------------------------------------------------");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        console.log("-----------------------------------------------------------------------------");
        console.log("YOU LOOOOSEEEEE!! SCISSORS LOSSES TO ROCK!!");
        console.log("-----------------------------------------------------------------------------");
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("-----------------------------------------------------------------------------");
        console.log("BOOORING IT'S A TIE");
        console.log("-----------------------------------------------------------------------------");
    }

    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
    console.log("-----------------------------------------------------------------------------");
    console.log("-----------------------------------------------------------------------------");
    console.log("-----------------------------------------------------------------------------");

}

function playGame() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    
}

playGame();

window.onload = function what() {document.getElementById("main").innerHTML = getComputerChoice()}; //window.onload odotetaan DOM kokonaan lataamista jonka jälkeen suoritta function