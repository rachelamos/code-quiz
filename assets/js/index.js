let startButton = document.querySelector(".start-button");
let timerElement = document.querySelector(".timer-count");
let timerBox = document.querySelector(".timer-box");
let questionBox = document.querySelector(".question-box");
let question = document.querySelector(".question");
let answer = document.querySelector(".answer-box");
let answer1 = document.querySelector(".answer1");
let answer2 = document.querySelector(".answer2");
let answer3 = document.querySelector(".answer3");
let answer4 = document.querySelector(".answer4");
let index = 0;

let timer;
let timerCount = 20;
let score = 0;

let questionsArray = [
    {
        question: "Commonly used data types do NOT include:",
        answers: ["Boolean", "String", "Variable", "Number"],
        correctAnswer: "Number"
    },
    {
        question: "Which of the following is not one of the main three programming languages of web development?",
        answers: ["HTML", "Java", "CSS", "JavaScript"],
        correctAnswer: "Java"
    },
    {
        question: "Which syntax signifies as a string to JavaScript?",
        answers: ['()', '[]', '{}', '""'],
        correctAnswer: '""'
    }
];

// startTimer function starts the timer when the start button is pressed.
function startTimer() {
    event.preventDefault();
    renderQuestions();
    timerBox.hidden = false;
    timer = setInterval(function () {
        timerCount--;
        // console.log(timerCount);
        timerElement.textContent = timerCount;
    }, 1000);
}

// renders the questions and answers when start button pressed and as each question is answered.
function renderQuestions() {
    questionBox.hidden = false;
    if (index > questionsArray.length - 1) {
        return;
    }   else {
    question.textContent = questionsArray[index].question;
    answer1.textContent = questionsArray[index].answers[0];
    answer2.textContent = questionsArray[index].answers[1];
    answer3.textContent = questionsArray[index].answers[2];
    answer4.textContent = questionsArray[index].answers[3];
}}

answer1.addEventListener("click", function (event) {
    console.log(event);
    if (timerCount === 0) {
        return;
    }
    let selectedAnswer = event.target.innerText;
    if (selectedAnswer === questionsArray[index].correctAnswer) {
        console.log("Correct!");
        index += 1;
        score += 10;
        console.log(score);
        renderQuestions();
    } else {
        console.log("Wrong!");
        index += 1;
        timerCount -= 5;
        console.log(score);
        renderQuestions();
    }
})

answer2.addEventListener("click", function (event) {
    console.log(event);
    if (timerCount === 0) {
        return;
    }
    let selectedAnswer = event.target.innerText;
    if (selectedAnswer === questionsArray[index].correctAnswer) {
        console.log("Correct!");
        index += 1;
        score += 10;
        console.log(score);
        renderQuestions();
    } else {
        console.log("Wrong!");
        index += 1;
        timerCount -= 5;
        console.log(score);
        renderQuestions();
    }
})

answer3.addEventListener("click", function (event) {
    console.log(event);
    if (timerCount === 0) {
        return;
    }
    let selectedAnswer = event.target.innerText;
    if (selectedAnswer === questionsArray[index].correctAnswer) {
        console.log("Correct!");
        index += 1;
        score += 10;
        console.log(score);
        renderQuestions();
    } else {
        console.log("Wrong!");
        index += 1;
        timerCount -= 5;
        console.log(score);
        renderQuestions();
    }
})

answer4.addEventListener("click", function (event) {
    console.log(event);
    if (timerCount === 0) {
        return;
    }
    let selectedAnswer = event.target.innerText;
    if (selectedAnswer === questionsArray[index].correctAnswer) {
        console.log("Correct!");
        index += 1;
        score += 10;
        console.log(score);
        renderQuestions();
    } else {
        console.log("Wrong!");
        index += 1;
        timerCount -= 5;
        console.log(score);
        renderQuestions();
    }
})

// function checkAnswer() {

// }


// attaches event listener to start button to call the startTimer function on click
startButton.addEventListener("click", startTimer);