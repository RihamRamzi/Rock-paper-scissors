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
  let userChoice = prompt("Select Rock, Paper or Scissors");
  if (userChoice == null) {
    alert`you exit the round`;
  } else {
    return userChoice.toLowerCase();
  }
}

function playGame() {
  let rounds = 5;
  let humanScore = 0;
  let computerScore = 0;

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

playGame();
