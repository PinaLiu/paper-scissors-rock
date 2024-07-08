import { computerChoice, restart, winner, updateScore } from "./game.js";

export const userVsComputer = () => {
  const buttons = document.querySelectorAll("#user-vs-computer .button");
  const userEl = document.getElementById("user");
  const computerEl = document.getElementById("computer");
  const resultEl = document.getElementById("result");
  const scoreUserEl = document.getElementById("score-user");
  const scoreComputerEl = document.getElementById("score-computer");

  const score = { player1: 0, player2: 0 };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const userChoice = button.id;
      const computerChoiceResult = computerChoice();
      const result = winner(userChoice, computerChoiceResult);

      userEl.textContent = `Hai scelto: ${userChoice}`;
      computerEl.textContent = `Il computer ha scelto: ${computerChoiceResult}`;
      resultEl.textContent = result;

      updateScore(result, score);

      scoreUserEl.textContent = `Utente: ${score.player1}`;
      scoreComputerEl.textContent = `Computer: ${score.player2}`;
    });
  });

  restart("restart", ["user", "computer", "result"], score);
};
