let humanScore = 0;
let computerScore = 0;

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

function playGame() {
  for (i = 0; i < rounds; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log(`opponent choose ${computerChoice}`);

    console.log(playRound(humanChoice, computerChoice));
  }
  console.log(`Your won ${humanScore} rounds`);
  console.log(`Your opponent won ${computerScore} rounds`);

  if (humanScore === computerScore) {
    console.log(`The game is a Draw!`);
  } else if (humanScore > computerScore) {
    console.log(`You won the game!`);
  } else {
    console.log(`You lost the game!`);
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return `Draw!`;
  } else if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      humanScore++;
      humanSDis.textContent = `player score: ${humanScore}`;
      return `Rock smashes scissors, YOU WIN!`;
    } else if (computerChoice === "paper") {
      computerScore++;
      computerSDis.textContent = `opponent score: ${computerScore}`;
      return `Paper crushed the Rock, YOU LOOSE!`;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      humanScore++;
      humanSDis.textContent = `player score: ${humanScore}`;
      return `Paper crushed the Rock, YOU WIN!`;
    } else if (computerChoice === "scissors") {
      computerScore++;
      computerSDis.textContent = `opponent score: ${computerScore}`;
      return `Scissors sliced the paper, YOU LOOSE!`;
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      humanScore++;
      humanSDis.textContent = `player score: ${humanScore}`;
      return `Scissors sliced the paper, YOU WIN`;
    } else if (computerChoice === "rock") {
      computerScore++;
      computerSDis.textContent = `opponent score: ${computerScore}`;
      return `Rock smashes scissors, YOU LOOSE!`;
    }
  }
}
let rounds = 0;

const display = document.querySelector(".display");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const humanSDis = document.querySelector("#playerScore");
const computerSDis = document.querySelector("#opponentScore");

rock.addEventListener("click", () => {
  display.textContent = playRound(`rock`, getComputerChoice());
  rounds++;
});

paper.addEventListener("click", () => {
  display.textContent = playRound(`paper`, getComputerChoice());
  rounds++;
});
scissors.addEventListener("click", () => {
  display.textContent = playRound(`scissors`, getComputerChoice());
  rounds++;
});
