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

function playAgain() {
  const playAgainBtn = document.createElement("button");
  playAgainBtn.textContent = `Play Again`;
  container.appendChild(playAgainBtn);
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;

  playAgainBtn.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    humanSDis.textContent = `player score: ${humanScore}`;
    computerSDis.textContent = `opponent score: ${computerScore}`;
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    display.textContent = "";
    winnerTxt.textContent = "";
    container.removeChild(playAgainBtn);
  });
}

function checkWinner() {
  if (humanScore === 5) {
    winnerTxt.textContent = `YOU WIN!`;
    playAgain();
  }
  if (computerScore === 5) {
    winnerTxt.textContent = `YOU LOOSE!`;
    playAgain();
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

const container = document.querySelector(".container");
const display = document.querySelector(".display");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const humanSDis = document.querySelector("#playerScore");
const computerSDis = document.querySelector("#opponentScore");
const winnerTxt = document.querySelector("#winnerTxt");

rock.addEventListener("click", () => {
  display.textContent = playRound(`rock`, getComputerChoice());
  checkWinner();
});

paper.addEventListener("click", () => {
  display.textContent = playRound(`paper`, getComputerChoice());
  checkWinner();
});
scissors.addEventListener("click", () => {
  display.textContent = playRound(`scissors`, getComputerChoice());
  checkWinner();
});
