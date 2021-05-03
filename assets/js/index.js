let startButton = document.querySelector(".start-button");
let timerElement = document.querySelector(".timer-count");
let section = document.querySelector(".timer-box")

let timer;
let timerCount = 9;

function startTimer() {
    section.hidden = false;
    timer = setInterval(function() {
        timerCount--;
        console.log(timerCount);
        timerElement.textContent = timerCount;
    }, 1000);
}

startButton.addEventListener("click", startTimer);