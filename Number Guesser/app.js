/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Hint player the number is greater or lesser than correct answer
- Let player choose to play again
*/

// Game values
let min = getMin(),
  max = getMax(min),
  winningNum = getWin(min, max),
  guessesLeft = Math.floor((max - min) / 2 - 1);

// UI Elemenets
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message"),
  hint = document.querySelector(".hint");

// Assign UI min and Max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for Guess
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  } else {
    // check if Won
    if (guess === winningNum) {
      gameOver(true, `${winningNum} is correct, YOU WON`);
    } else {
      // Wrong number
      guessesLeft -= 1;
      if (guessesLeft === 0) {
        // Game Over - Lost
        gameOver(
          false,
          `GAME OVER, you lost. The correct number was ${winningNum}`
        );
      } else {
        // Game continued - answer Wrong
        guessInput.style.borderColor = "red";
        guessInput.value = "";
        setMessage(
          `${guess} is not correct , ${guessesLeft} guesses left`,
          "red"
        );

        setHint(guess);
      }
    }
  }
});

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

function setHint(guess) {
  hint.style.color = "blue";
  if (guess > winningNum) {
    hint.textContent = `Hint: Winning Num is lesser than ${guess} `;
  } else {
    hint.textContent = `Hint: Winning Num is greater than ${guess} `;
  }
}

function gameOver(won, msg) {
  let color = won ? "green" : "red";
  guessInput.disabled = true;
  // change Border color
  guessInput.style.borderColor = color;
  setMessage(msg, color);
  hint.textContent = "";

  guessBtn.value = "Play Again";
  guessBtn.addEventListener("click", function () {
    location.reload();
  });
}

// Assign Random Values

function getMin() {
  return Math.floor(Math.random() * 100);
}

function getMax(min) {
  return Math.floor(Math.random() * (100 - min + 1) + min);
}

function getWin(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
