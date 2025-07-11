import { scoreMap } from "./scoreMap.js";
import { specialCases } from "./specialCases.js";

export const guessInput = document.getElementById('guessInput');
export const gameText = document.getElementById('gameText');
export const gameLevelCountText = document.getElementById('gameLevelCountText');

export let correctAnswerCount = 6;

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
    gameLevelCountText.textContent = correctAnswerCount;

    if (correctAnswerCount >= Object.keys(scoreMap).length) {
        gameText.textContent = "You win I guess :(";
    } else {
        gameText.textContent = scoreMap[correctAnswerCount].gameText;
    }
}

export function increaseCorrectAnswerCount(){
    correctAnswerCount++;
    // console.log("Correct answer count: ", correctAnswerCount);
    // console.log("Score Map Size: ", Object.keys(scoreMap).length);
    specialCases();
}

export function toggleElementVisibility(element){
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    } else {
        element.classList.add('hidden');
    }
}