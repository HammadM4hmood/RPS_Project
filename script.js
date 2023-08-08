const playerChoice = prompt("Make a choice between Rock, Paper, or Scissors: ");

playerChoice.toLowerCase;

function getComputerChoice(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

var choices = ["rock", "paper", "scissors"];

// create a function for a round of rock, paper, scissors
// the function has 2 parameters "playerSelection" and "computerSelection"
function playRound(playerSelection, computerSelection) {
  // if the player choice and the computer choice are the same than return draw
  // do this by making playerSelection == to the computerselection
  if (playerSelection === computerSelection) {
    return "It's a Tie";
  }
  // if the player wins then return "You Won! x beats x"
  // if the player lost return "You lost x beats x"
  // check this by see if playerSelection equals rock, paper, or scissors, then see if the computerSelection equals rock, paper, or scissors
  // If the player won the battle return "You Won" else return "You Lost"
  else if (computerSelection === "scissors") {
    if (playerSelection === "rock") {
      return "You Won!";
    } else {
      return "You Lost";
    }
  } else if (computerSelection === "scissors") {
    if (playerSelection === "paper") {
      return "You Won!";
    } else {
      return "You Lost";
    }
  } else if (computerSelection === "paper") {
    if (playerSelection === "scissors") {
      return "You Won";
    } else {
      return "You Lost";
    }
  }
}

const playerSelection = playerChoice;
const computerSelection = getComputerChoice(choices);

console.log(playRound(playerSelection, computerSelection));
