import { checkCorrectAnswer, correctAnswerCount, toggleElementVisibility } from "./util.js";

export const yesButton = document.getElementById('yesButton');
export const noButton = document.getElementById('noButton');

export function specialCases(){
    switch (correctAnswerCount) {
        case 1:
            console.log("Your name is Bob!");
            break;
        case 2:
            console.log("ice cream");
            break;
        case 4:
            toggleElementVisibility(guessInput);
            toggleElementVisibility(yesButton);
            toggleElementVisibility(noButton);
            buttonClickListener(yesButton, "yes");
            break;
        case 5:
            noAnswerQuestion();
            break;
        case 8:
            noAnswerQuestion();
            break;
        
    }
}

export function buttonClickListener(button, string){
    button.addEventListener('click', function(){
        checkCorrectAnswer(string);
        toggleElementVisibility(guessInput);
        toggleElementVisibility(yesButton);
        toggleElementVisibility(noButton);
    });
}

export function noAnswerQuestion(){
    toggleElementVisibility(guessInput);
    setTimeout(function() {
        checkCorrectAnswer("");
        toggleElementVisibility(guessInput);
    }, 3000); 
}