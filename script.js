function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3) + 1;

  if (randomNum === 1) {
    return "rock";
  } else if (randomNum === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  return (userChoice = prompt("Select Rock, Paper or Scissors").toLowerCase());
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return `Draw!`;
  } else if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      humanScore++;
      return `Rock smashes scissors, YOU WIN!`;
    } else if (computerChoice === "paper") {
      computerScore++;
      return `Paper crushed the Rock, YOU LOOSE!`;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      humanScore++;
      return `Paper crushed the Rock, YOU WIN!`;
    } else if (computerChoice === "scissors") {
      computerScore++;
      return `Scissors sliced the paper, YOU LOOSE!`;
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      humanScore++;
      return `Scissors sliced the paper, YOU WIN`;
    } else if (computerChoice === "rock") {
      computerScore++;
      return `Rock smashes scissors, YOU LOOSE!`;
    }
  }
}

let humanScore = 0;
let computerScore = 0;
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

console.log(playRound(humanChoice, computerChoice));