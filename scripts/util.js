import { scoreMap } from "./scoreMap.js";

export const guessInput = document.getElementById('guessInput');
export const gameText = document.getElementById('gameText');
export let correctAnswerCount = 0;

export function checkCorrectAnswer(guessString){
    const answer = scoreMap[correctAnswerCount].answer;
    if (guessString !== answer){
        flashRed();
    } else {
        flashGreen();
        increaseCorrectAnswerCount();
        updateGameText();
    }
}

export function flashRed(){
    guessInput.classList.add('flash-jiggleRed');
    setTimeout(() => {
        guessInput.classList.remove('flash-jiggleRed');
    }, 2000);
}

export function flashGreen(){
    guessInput.classList.add('flash-jiggleGreen');
    setTimeout(() => {
        guessInput.classList.remove('flash-jiggleGreen');
    }, 2000);
}

export function updateGameText(){
    gameText.textContent = scoreMap[correctAnswerCount].gameText;
}

export function increaseCorrectAnswerCount(){
    correctAnswerCount++;
    console.log("increasing answer count to: ", correctAnswerCount);
}