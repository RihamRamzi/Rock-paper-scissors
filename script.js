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
  let rounds = 5;

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

const display = document.querySelector(".display");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
  display.textContent = playRound(`rock`, getComputerChoice());
});
paper.addEventListener("click", () => {
  display.textContent = playRound(`paper`, getComputerChoice());
});
scissors.addEventListener("click", () => {
  display.textContent = playRound(`scissors`, getComputerChoice());
});

//console.log(playRound(getHumanChoice(), getComputerChoice()));
