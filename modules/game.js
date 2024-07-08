export const choices = ["carta", "forbici", "sasso"];

// scelta PC
export const computerChoice = () => {
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
};

//  Scelta vincitore
export const winner = (player1, player2) => {
  if (player1 === player2) {
    return "Pareggio!!";
  } else if (
    (player1 === "carta" && player2 === "sasso") ||
    (player1 === "forbici" && player2 === "carta") ||
    (player1 === "sasso" && player2 === "forbici")
  ) {
    return "Vince il giocatore 1";
  } else {
    return "Vince il giocatore 2";
  }
};

// Gestione punteggio
export const updateScore = (result, score) => {
  if (result === "Vince il giocatore 1") {
    score.player1++;
  } else if (result === "Vince il giocatore 2") {
    score.player2++;
  }
};

//  Restart
export const restart = (restartButtonId, clearGame, score) => {
  const restartButton = document.getElementById(restartButtonId);

  restartButton.addEventListener("click", () => {
    clearGame.forEach((element) => {
      document.getElementById(element).textContent = "";
    });

    if (score) {
      score.player1 = 0;
      score.player2 = 0;
      document.getElementById("score-user").textContent = "";
      document.getElementById("score-computer").textContent = "";
      document.getElementById("score-computer1").textContent = "";
      document.getElementById("score-computer2").textContent = "";
    }
  });
};
