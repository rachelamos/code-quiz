let startButton = document.querySelector(".start-button");
let timerElement = document.querySelector(".timer-count");
let timerBox = document.querySelector(".timer-box");
let questionBox = document.querySelector(".question-box");
let question = document.querySelector(".question");
let answer1 = document.querySelector(".answer1");
let answer2 = document.querySelector(".answer2");
let answer3 = document.querySelector(".answer3");
let answer4 = document.querySelector(".answer4");
let highScores = document.querySelector(".high-scores");
let initialInputForm = document.querySelector(".initial-input-form");
let submitInitialsButton = document.querySelector(".submit-initials-button");

let index = 0;
let timer;
let timerCount = 25;
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
        timerElement.textContent = timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
            gameOver();
        }
    }, 1000);
}

// render high score page
function gameOver() {
    alert("Game over!");
    clearInterval(timer);
    getHighScores();
}

// grab player's initials and display onto page
function getHighScores() {
    timerBox.hidden = true;
    highScores.hidden = false;
    highScores.children[2].textContent = "Final Score: " + score + "! Please enter your initials.";
    initialInputForm.textContent = "Enter Initials here to record your score.";
}

// renders the questions and answers when start button pressed and as each question is answered.
function renderQuestions() {
    questionBox.hidden = false;
    if (index > questionsArray.length - 1) {
        gameOver();
    }   else {
    question.textContent = questionsArray[index].question;
    answer1.textContent = questionsArray[index].answers[0];
    answer2.textContent = questionsArray[index].answers[1];
    answer3.textContent = questionsArray[index].answers[2];
    answer4.textContent = questionsArray[index].answers[3];
}}

// event listeners for each answer choice
answer1.addEventListener("click", checkAnswer);
answer2.addEventListener("click", checkAnswer);
answer3.addEventListener("click", checkAnswer);
answer4.addEventListener("click", checkAnswer);

// checks the selected answer with the question's correct answer
function checkAnswer(event) {
    let selectedAnswer = event.target.innerText;
    if (selectedAnswer === questionsArray[index].correctAnswer) {
        index += 1;
        score += 10;
        localStorage.setItem("score", score);
        alert("Correct!");
        renderQuestions();
    }   else {
        index += 1;
        timerCount -= 5;
        alert("Sorry, incorrect.");
        renderQuestions();
    }
}

// attaches event listener to submit button for recording scores
submitInitialsButton.addEventListener("click", function() {
    let gamerInitialsAndScore = {
        score: score,
        initialInputForm: initialInputForm.value.trim(),
    };
    localStorage.setItem("gamerInitialsAndScore", JSON.stringify(gamerInitialsAndScore));
    let finalScore = JSON.parse(localStorage.getItem("gamerInitialsAndScore"));
    highScores.children[1].textContent = "Score: " + finalScore.score + " Player: " + finalScore.initialInputForm;
});

// attaches event listener to start button to call the startTimer function on click
startButton.addEventListener("click", startTimer);