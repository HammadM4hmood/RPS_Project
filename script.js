const getComputerChoice = () => {
  const compNumber = Math.floor(Math.random() * 3 + 1);

  if (compNumber == 1) {
    return "Rock";
  } else if (compNumber == 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (playerSelection == "Rock") {
    if (computerSelection == "Scissors") {
      return "You Won!";
    } else {
      return "You Lost!";
    }
  } else if (playerSelection == "Paper") {
    if (computerSelection == "Rock") {
      return "You Won!";
    } else {
      return "You Lost!";
    }
  } else if (playerSelection == "Scissors") {
    if (computerSelection == "Paper") {
      return "You Won!";
    } else {
      return "You Lost!";
    }
  }
};

const playerSelection = prompt("Chose between Rock, Paper, Scissors: ");

let game = () => {
  for (let i = 0; i <= 4; i++) {
    console.log(playRound(playerSelection, getComputerChoice));
  }
};

game();
