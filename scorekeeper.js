// ----------
var p1Score = 0;
var p2Score = 0;
var gameOver = false;

var scoreToWin = 5;
var scoreToWinP = document.querySelector(".score-to-win-p");
var scoreToWinCounter = document.querySelector(".score-to-win-counter");
scoreToWinCounter.textContent = scoreToWin;
var scoreToWinInput = document.querySelector(".score-to-win-input");
var scoreInputValue;
var scoreToWinError = document.createElement("p");
scoreToWinError.textContent = "Score to win can't be less than 0";
scoreToWinError.className = "reset-error-message";
var s = scoreToWinError.style;

var p1ScoreCounter = document.querySelector(".player-one-score");
var p1Button = document.querySelector(".player-one-button");
var p2ScoreCounter = document.querySelector(".player-two-score");
var p2Button = document.querySelector(".player-two-button");

var resetButton = document.querySelector(".reset-button");

// ----------
function addPlayerOneScore() {
  if (!gameOver) {
    p1Score++;
    p1ScoreCounter.textContent = p1Score;
    if (p1Score === scoreToWin) {
      console.log("p1 Wins!");
      p1ScoreCounter.classList.add("winner");
      p2ScoreCounter.classList.add("loser");
      gameOver = true;
    }
  }
}

// ----------
function addPlayerTwoScore() {
  if (!gameOver) {
    p2Score++;
    p2ScoreCounter.textContent = p2Score;
    if (p2Score === scoreToWin) {
      console.log("p2 Wins!");
      p1ScoreCounter.classList.add("loser");
      p2ScoreCounter.classList.add("winner");
      gameOver = true;
    }
  }
}

// ----------
function setScoreToWin(value) {
  console.log(value);
  if (value === 0) {
    scoreToWin = undefined;
    scoreToWinCounter.textContent = "infinity!";
  } else if (value >= 1) {
    scoreToWin = value;
    scoreToWinCounter.textContent = scoreToWin;
  } else {
    scoreToWinP.appendChild(scoreToWinError);
    s.opacity = 1;
    (function fade() {
      (s.opacity -= 0.1) < 0 ? (s.display = "none") : setTimeout(fade, 170);
    })();
    scoreToWinInput.value = 0;
  }
}

// ----------
function resetGame(event) {
  p1Score = 0;
  p2Score = 0;
  p1ScoreCounter.textContent = 0;
  p2ScoreCounter.textContent = 0;
  p1ScoreCounter.className = "";
  p2ScoreCounter.className = "";
  gameOver = false;
}

// ----------
scoreToWinInput.addEventListener("input", function() {
  scoreInputValue = parseInt(this.value);
  setScoreToWin(scoreInputValue);
  resetGame();
});

scoreToWinInput.onkeypress = function(event) {
  scoreInputValue = parseInt(this.value);
  if (event.which === 13) {
    setScoreToWin(scoreInputValue);
    resetGame();
  }
};

// ----------
p1Button.addEventListener("click", addPlayerOneScore);
p2Button.addEventListener("click", addPlayerTwoScore);
resetButton.addEventListener("click", resetGame);
