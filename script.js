// This program plays rock paper scissors

// This matrix coverts player choices into a result
// [p1Choice][p2Choice] => Result
// Result key:
// 0 Draw
// 1 p1 win
// 2 p2 win
let resultMatrix = [
  [0, 2, 1],
  [1, 0, 2],
  [2, 1, 0],
];

/**
 * Randomly return Rock, Paper, or Scissors
 */
function computerPlay() {
  let number = 3 * Math.random();
  if (number < 1) {
    return 0;
  } else {
    if (number < 2) {
      return 1;
    } else {
      return 2;
    }
  }
}

/**
 * Choice Key:
 * 0 - ROCK
 * 1 - PAPER
 * 2 - SCISSORS
 */
function choiceStringToKey(string) {
  if (string === null) {
    return 555;
  }
  string = string.toUpperCase();
  if (string === "ROCK") {
    return 0;
  } else {
    if (string === "PAPER") {
      return 1;
    } else if (string === "SCISSORS") {
      return 2;
    } else {
      return 555;
    }
  }
}

function keyToChoiceString(key) {
  if (key === 0) {
    return "Rock";
  } else {
    if (key === 1) {
      return "Paper";
    } else return "Scissors";
  }
}

function playRound(playerSelection) {
  // Let's say the player is player 1 and the computer is player 2
  computerSelection = computerPlay();
  result = resultMatrix[playerSelection][computerSelection];
  let toPrint = "";
  if (result === 0) {
    toPrint = `It's a draw! Both players chose ${keyToChoiceString(
      playerSelection
    )}`;
  } else if (result === 1) {
    toPrint = `You win! Your choice, ${keyToChoiceString(
      playerSelection
    )}, beats ${keyToChoiceString(computerSelection)}`;
  } else {
    toPrint = `You lose! Your choice, ${keyToChoiceString(
      playerSelection
    )}, loses to ${keyToChoiceString(computerSelection)}`;
  }
  p = document.createElement("p");
  p.innerText = toPrint;
  body.appendChild(p);
  return result;
}

rockButton = document.querySelector("#rock");
paperButton = document.querySelector("#paper");
scissorsButton = document.querySelector("#scissors");

body = document.querySelector("body");

rockButton.addEventListener("click", () => playRound(0));
paperButton.addEventListener("click", () => playRound(1));
scissorsButton.addEventListener("click", () => playRound(2));

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let games = 5;
  for (let i = 0; i < games; i++) {
    let choice = "not chosen";
    while (choiceStringToKey(choice) > 5) {
      choice = prompt("Please choose Rock, Paper, or Scissors");
    }
    // When player 1 wins add 1 to his score
    // In case of draw (return value 0) or lose (return value 2) add nothing, hence the %2.
    result = playRound(choiceStringToKey(choice), computerPlay());
    result === 1 ? (playerScore += 1) : null;
    result === 2 ? (computerScore += 1) : null;
  }
  console.log(
    `Final Scores:\n Player: ${playerScore}\n Computer: ${computerScore}`
  );
}
