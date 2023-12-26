// script.js

// Define variables for DOM elements
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('options');
const timerElement = document.getElementById('time-left');
const scoreElement = document.getElementById('current-score');
const nextButton = document.getElementById('next-button');

// Define the quiz data
const quizData = [
    {
        question: 'What is the capital of France?',
        answers: ['Paris', 'London', 'Berlin', 'Madrid'],
        correctAnswer: 'Paris',
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: ['Earth', 'Mars', 'Venus', 'Jupiter'],
        correctAnswer: 'Mars',
    },
    {
        question: 'What is 1+1?',
        answers: ['2', '1', '3', '4'],
        correctAnswer: '2',
    }    
];

// Add your js code herez


var currentQuestionIndex = 0;
let timeRemaining = 60;
let timerInterval;
function startTimer() {
    timerInterval = setInterval(function () {
        timeRemaining--;
        document.getElementById("time").innerText = timeRemaining;

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            nextQuestion();
        }
    }, 1000);
}

let score = 0
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    answersElement.innerHTML = ""; // Clear previous options

    currentQuestion.answers.forEach((option, index) => {
        console.log(option)
        const optionElement = document.createElement("div");
        optionElement.classList.add("option");
        optionElement.innerText = option;
        optionElement.onclick = function () {
            checkAnswer(option);
        };
        console.log(optionElement)
        answersElement.appendChild(optionElement);
    });
}


function checkAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        score = score + 1
        scoreElement.innerText = score 
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }

    clearInterval(timerInterval);
    nextQuestion();
}


function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        timeRemaining = 60; // Reset timer for the next question
        startTimer();
        loadQuestion();
    } else {
        alert("Quiz completed!");
    }
}

  // Initial load
  loadQuestion();
  startTimer();