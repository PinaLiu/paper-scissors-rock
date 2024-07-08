import { computerChoice, restart, winner, updateScore } from "./game.js";

export const computerVsComputer = () => {
  const startButton = document.getElementById("start-computer-vs-computer");
  const computer1El = document.getElementById("computer1");
  const computer2El = document.getElementById("computer2");
  const resultEl = document.getElementById("result-computer");
  const scoreComputer1El = document.getElementById("score-computer1");
  const scoreComputer2El = document.getElementById("score-computer2");

  const score = { player1: 0, player2: 0 };

  startButton.addEventListener("click", () => {
    const computer1Choice = computerChoice();
    const computer2Choice = computerChoice();
    const result = winner(computer1Choice, computer2Choice);

    computer1El.textContent = `Computer 1 ha scelto: ${computer1Choice}`;
    computer2El.textContent = `Computer 2 ha scelto: ${computer2Choice}`;
    resultEl.textContent = result;

    updateScore(result, score);

    scoreComputer1El.textContent = `Computer 1: ${score.player1}`;
    scoreComputer2El.textContent = `Computer 2: ${score.player2}`;
  });

  restart("restart", ["computer1", "computer2", "result-computer"], score);
};
