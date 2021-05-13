/* values for reference:
        Rock:0,
        Paper:1,
        Scissor:2;
        */

let computerScore = 0;
let playerScore = 0;

window.addEventListener("click", (e) => {
  if (computerScore < 5 && playerScore < 5) {
    if (
      e.target.id === "Rock" ||
      e.target.id === "Paper" ||
      e.target.id === "Scissor"
    ) {
      let score = game(e);
      if (!score) {
        computerScore++;
      } else if (score === 1) playerScore++;
      else {
        playerScore++;
        computerScore++;
      }
      displayScore(playerScore, computerScore);
    }
  }
  if (computerScore === 5 || playerScore === 5) {
    displayResult(computerScore, playerScore);
  }
});

const game = (e) => {
  let player = playerSelection(e);
  let computer = computerSelection();
  if (player === 0 && computer === 2) return 1;

  if (player === computer) return 2;
  else if (player - computer === 1) return 1;
  else {
    return 0;
  }
};

const displayScore = (playerScore, computerScore) => {
  const playerDiv = document.querySelector(".humanScore");
  playerDiv.innerHTML = "";
  let content = document.createElement("h1");
  content.textContent = `Score: ${playerScore}`;
  playerDiv.appendChild(content);

  const machineScore = document.querySelector(".machineScore");
  machineScore.innerHTML = "";
  content = document.createElement("h1");
  content.textContent = `Score: ${computerScore}`;
  machineScore.appendChild(content);
};

const playerSelection = (e) => {
  let player = e.target.id;
  player = player.toLowerCase();
  displayPlayerChoice(e.target.id);
  if (player === "rock") return 0;
  else if (player === "paper") return 1;
  else return 2;
};

const computerSelection = () => {
  let value = Math.floor(Math.random() * 3);
  displayComputerChoice(value);
  return value;
};

const displayComputerChoice = (choice) => {
  const div = document.querySelector(".machine");
  div.innerHTML = "";
  const content = document.createElement("h1");

  if (choice === 0) content.textContent = "Machine chooses : Rock";
  else if (choice === 1) content.textContent = "Machine chooses : Paper";
  else content.textContent = "Machine chooses : Scissor";
  div.appendChild(content);
};

const displayPlayerChoice = (choice) => {
  const div = document.querySelector(".human");
  div.innerHTML = "";
  const content = document.createElement("h1");
  content.textContent = `You chooses : ${choice}`;
  div.appendChild(content);
};

const displayResult = (computerScore, playerScore) => {
  const div = document.querySelector(".result");
  div.classList.add("style-result");
  div.innerHTML = "";
  const content = document.createElement("h1");
  if (computerScore === playerScore) {
    content.textContent = "Draw!";
  } else if (computerScore > playerScore) {
    content.textContent = "You Lose! Better Luck Next Time!";
  } else {
    content.textContent = "You Win!";
  }
  div.appendChild(content);
};
