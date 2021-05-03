let startButton = document.querySelector(".start-button");
let timerElement = document.querySelector(".timer-count");
let timerBox = document.querySelector(".timer-box");
let questionBox = document.querySelector(".question-box");
let question = document.querySelector(".question");
let answer = document.querySelector(".answer");
let questionIndex = 0;

let timer;
let timerCount = 9;

let questionsArray = [
    {
        question: "Commonly used data types do NOT include:",
        answers: ["Boolean", "String", "Variable", "Number"],
        correctAnswer: "Variable"
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
// console.log(questionsArray.length);
// console.log(questionsArray[0].question);
// console.log(questionsArray[0].answers);

// let questionsArray = ["Commonly used data types do NOT include:", "JavaScript is a ____-programming language.", "Arrays can be used to store:"];
// let answers = ["Boolean", "String", "String", "Variable", "Number"];

// startTimer function starts the timer when the start button is pressed.
function startTimer() {
    event.preventDefault();
    renderQuestions();
    timerBox.hidden = false;
    timer = setInterval(function () {
        timerCount--;
        console.log(timerCount);
        timerElement.textContent = timerCount;
    }, 1000);
}

// renders the questions and answers when start button pressed and as each question is answered.
function renderQuestions() {
    questionBox.hidden = false;
    // question.textContent = questionsArray[0];
    for (let i = 0; i < questionsArray.length; i++) {
        question.textContent = questionsArray[questionIndex].question;
        answer.textContent = questionsArray[i].answers;
    }
    
    // answer.textContent = answers[0];
}

// for (var i = 0; i < questionsArray.length; i++) {
//     (function renderQuestions(i) {
//         questionsBox.hidden = false;
//         question.textContent = questionsArray[i].question;
//         answer.textContent = questionsArray[i].answers;
//     })
// }


// attaches event listener to start button to call the startTimer function on click
startButton.addEventListener("click", startTimer);