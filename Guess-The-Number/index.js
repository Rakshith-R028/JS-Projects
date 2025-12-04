"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".btn-check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".input-number").value);

  if (!guess) {
    document.querySelector(".start-guess").textContent = "⛔ No number!";
  } else if (guess === secretNumber) {
    document.querySelector(".start-guess").textContent =
      "🍾 Correct number..!!";
    document.querySelector(".guess").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".input-number").style.backgroundColor = "#60b347";
    document.querySelector(".guess").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highest-score").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".start-guess").textContent =
        guess > secretNumber ? "📈 Too high..!!" : "📉 Too Low..!!";
      score--;
      document.querySelector(".current-score").textContent = score;
    } else {
      document.querySelector(".start-guess").textContent =
        "👎 You lost the game..!!";
      document.querySelector(".current-score").textContent = 0;
    }
  }
});

document.querySelector(".btn-again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".start-guess").textContent = "Start guessing...";
  document.querySelector(".current-score").textContent = score;
  document.querySelector(".guess").textContent = "?";
  document.querySelector(".input-number").value = "";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".input-number").style.backgroundColor = "black";
  document.querySelector(".guess").style.width = "15rem";
});
