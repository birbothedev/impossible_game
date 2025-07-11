
import { guessInput, checkCorrectAnswer, updateGameText, 
    increaseCorrectAnswerCount, toggleElementVisibility} from "./util.js";

import { yesButton, noButton } from "./specialCases.js";

export let guess;
let hasGuessedOnce = false;


guessInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        guess = guessInput.value;
        if (guess === "") {
            guessInput.placeholder = "Enter something before guessing dummy";
        } else if (!hasGuessedOnce)  {
            hasGuessedOnce = true;
            increaseCorrectAnswerCount();
        }

        if (hasGuessedOnce) {
            checkCorrectAnswer(guess);
            updateGameText();
        }
        // clear the input field after processing
        guessInput.value = ''; 
    }
});

function initialize(){
    updateGameText();
    toggleElementVisibility(yesButton);
    toggleElementVisibility(noButton);
}

initialize();