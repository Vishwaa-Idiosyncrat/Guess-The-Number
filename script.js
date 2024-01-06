let secretnum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".guessing").textContent = message;
};

document.querySelector(".btncheck").addEventListener("click", function () {
  const guessnum = Number(document.querySelector(".guess").value);
  console.log(guessnum, typeof guessnum);

  if (!guessnum) {
    displayMessage("No Number...");
  } else if (guessnum === secretnum) {
    displayMessage("Congrats!!!...  You won");
    document.querySelector(".centerdesign").textContent = secretnum;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".centerdesign").style.width = "30rem";
    document.querySelector(".highscore").style.fontSize = "5rem";
    document.querySelector(".hscr").style.fontSize = "5rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".hscr").textContent = highscore;
    }
  } else if (guessnum !== secretnum) {
    if (score > 1) {
      displayMessage(guessnum > secretnum ? "Too High" : "Too Low");
      score--;
      document.querySelector(".scr").textContent = score;
    } else {
      displayMessage("Sorry!!... Game Over");
      document.querySelector(".scr").textContent = 0;
    }
  }
});

document.querySelector(".butagain").addEventListener("click", function () {
  score = 20;
  secretnum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".centerdesign").textContent = "?";
  document.querySelector(".scr").textContent = score;
  displayMessage("Start Guessing...");
  document.querySelector(".centerdesign").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
});
