"use strict";

const playerCardFace = document.querySelector(".player-card-face");
const playerCardBack = document.querySelector(".player-card-back");
const computerCardFace = document.querySelector(".computer-card-face");
const computerCardBack = document.querySelector(".computer-card-back");
const btnRoll = document.querySelector(".btn-roll");
const btnRestart = document.querySelector(".btn-restart");
const winnerDisplay = document.querySelector(".winner-display");
const gameExplanation = document.querySelector(".game-explanation");
const flexContainer = document.querySelector(".flex-container");
let playerScore = document.querySelector(".player-score");
let computerScore = document.querySelector(".computer-score");

let currentComputerScore = 10;
let currentPlayerScore = 10;
let choicePlayer = "";
let choiceComputer = "";
let playing = true;

// initial conditions
playerScore.textContent = 10;
computerScore.textContent = 10;
playerCardBack.classList.add("hidden");
computerCardBack.classList.add("hidden");
winnerDisplay.classList.add("hidden");

// computer and player random images get generated

const computerImageChoice = function () {
  const computerChoices = ["angel", "nature", "devious", "love"];
  const randomString = Math.floor(Math.random() * 4);
  choiceComputer = computerChoices[randomString];
  computerCardBack.src = `${choiceComputer}-cat.png`;
};

const playerImageChoice = function () {
  const playerChoices = ["angel", "nature", "devious", "love"];
  const randomString = Math.floor(Math.random() * 4);
  choicePlayer = playerChoices[randomString];
  playerCardBack.src = `${choicePlayer}-cat.png`;
};

// computer and player points get calculated
const computerPoints = function () {
  if (choiceComputer === "angel") {
    currentComputerScore = currentComputerScore + 6;
  }

  if (choiceComputer === "devious") {
    currentPlayerScore = currentPlayerScore - 3;
  }

  if (choiceComputer === "nature") {
    currentComputerScore = currentComputerScore + 3;
    currentPlayerScore = currentPlayerScore;
  }

  if (choiceComputer === "love") {
    currentComputerScore = currentComputerScore + 2;
    currentPlayerScore = currentPlayerScore + 2;
  }
};

const playerPoints = function () {
  if (choicePlayer === "angel") {
    currentPlayerScore = currentPlayerScore + 6;
  }

  if (choicePlayer === "devious") {
    currentComputerScore = currentComputerScore - 3;
  }

  if (choicePlayer === "nature") {
    currentComputerScore = currentComputerScore;
    currentPlayerScore = currentPlayerScore + 3;
  }

  if (choicePlayer === "love") {
    currentComputerScore = currentComputerScore + 2;
    currentPlayerScore = currentPlayerScore + 2;
  }
};

// the winner is determined
const winner = function () {
  if (currentComputerScore > currentPlayerScore && currentComputerScore >= 30) {
    winnerDisplay.classList.remove("hidden");
    winnerDisplay.textContent = "Computer Wins!";
    playing = false;
  } else if (
    currentPlayerScore > currentComputerScore &&
    currentPlayerScore >= 30
  ) {
    winnerDisplay.classList.remove("hidden");
    winnerDisplay.textContent = "Player Wins!";
    playing = false;
  } else if (
    currentComputerScore === currentPlayerScore &&
    currentComputerScore >= 30
  ) {
    winnerDisplay.classList.remove("hidden");
    winnerDisplay.textContent = "It's a tie!";
    playing = false;
  }
};

// on click function to generate game
btnRoll.addEventListener("click", function () {
  if (playing) {
    playerCardBack.classList.remove("hidden");
    computerCardBack.classList.remove("hidden");
    playerCardFace.classList.add("hidden");
    computerCardFace.classList.add("hidden");
    playerImageChoice();
    computerImageChoice();
    computerPoints();
    playerPoints();
    winner();
    computerScore.textContent = currentComputerScore;
    playerScore.textContent = currentPlayerScore;
  }
});

// restart the game

btnRestart.addEventListener("click", function () {
  playerScore.textContent = 10;
  computerScore.textContent = 10;
  playerCardBack.classList.add("hidden");
  computerCardBack.classList.add("hidden");
  playerCardFace.classList.remove("hidden");
  computerCardFace.classList.remove("hidden");
  winnerDisplay.classList.add("hidden");
  currentComputerScore = 10;
  currentPlayerScore = 10;
  choicePlayer = "";
  choiceComputer = "";
  playing = true;
});

flexContainer.addEventListener("click", function () {
  flexContainer.classList.add("hidden");
  btnRoll.classList.add("hidden");
  btnRestart.classList.add("hidden");
});

gameExplanation.addEventListener("click", function () {
  flexContainer.classList.remove("hidden");
  btnRoll.classList.remove("hidden");
  btnRestart.classList.remove("hidden");
});
