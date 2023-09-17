const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
let attempts = 0;

const guessInput = document.getElementById('guess');
const checkButton = document.getElementById('check');
const message = document.getElementById('message');

checkButton.addEventListener('click', () => {
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
    } else {
        attempts++;

        if (guess === randomNumber) {
            message.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
            checkButton.disabled = true;
        } else if (guess < randomNumber) {
            message.textContent = 'Try a higher number.';
        } else {
            message.textContent = 'Try a lower number.';
        }
    }
});
