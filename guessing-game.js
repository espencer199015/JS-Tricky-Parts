function guessingGame() {
  let secretNumber = Math.floor(Math.random() * 100);
  let gameOver = false;
  let totalGuesses = 0;

  return function(guess) {
    if (gameOver) {
      return "The game is over, you already won!";
    }

    totalGuesses++;

    if (guess < secretNumber) {
      return `${guess} is too low!`;
    } else if (guess > secretNumber) {
      return `${guess} is too high!`;
    } else {
      gameOver = true;
      return `You win! You found ${secretNumber} in ${totalGuesses} guesses.`;
    }
  };
}

module.exports = { guessingGame };