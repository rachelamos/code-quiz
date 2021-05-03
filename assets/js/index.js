let startButton = document.querySelector(".start-button");
let timerElement = document.querySelector(".timer-count");
let timerBox = document.querySelector(".timer-box");
let questionBox = document.querySelector(".question-box");
let question = document.querySelector(".question");
let answer = document.querySelector(".answer");

let timer;
let timerCount = 9;

function startTimer() {
    renderQuestions();
    timerBox.hidden = false;
    timer = setInterval(function() {
        timerCount--;
        console.log(timerCount);
        timerElement.textContent = timerCount;
    }, 1000);
}

function renderQuestions() {
    questionBox.hidden = false;
}

startButton.addEventListener("click", startTimer);