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
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

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
  }

  // check if Won
  if (guess === winningNum) {
    // Disable input
    guessInput.disabled = true;
    // change Border color
    guessInput.style.borderColor = "green";
    setMessage(`${winningNum} is correct, YOU WON`, "green");
  }
});

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
