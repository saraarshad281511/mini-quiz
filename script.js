//Step: 1 -> Create a Question Array
let quiz = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Markup Language",
            "Home Text Markup Language"
        ],
        correct: 0
    },
    {
        question: "Which language styles a website?",
        options: ["HTML", "Python", "CSS", "C++"],
        correct: 2
    },
    {
        question: "What is a programming language ?",
        options: ["HTML", "CSS", "JavaScript", "HTTP"],
        correct: 2
    },
    {
        question: "Which symbol is used for arrays?",
        options: ["{}", "()", "[]", "<>"],
        correct: 2
    }
];

//Step 2: Variables
let current = 0;
let score = 0;

//Load questions
function loadQuestion() {
    let q = quiz[current];
    document.getElementById("question").innerText = q.question;

    for (let i = 0; i < 4; i++) {
        document.getElementById("opt" + i).innerText = q.options[i];
    }

    document.getElementById("progress").innerText =
        `Question ${current + 1} of ${quiz.length}`;
    document.getElementById("score").innerText = `Score: ${score}`;

    document.getElementById("feedback").innerText = "";




}
loadQuestion()

//Check Answers
function checkAnswer(choice) {
    if (choice === quiz[current].correct) {
        score++;
        document.getElementById("feedback").innerText = "Correct";
    } else {
        document.getElementById("feedback").innerText = "Wrong";
    }
    current++;
    setTimeout(nextStep, 800);
}

//Next or Finish
function nextStep() {
    if (current < quiz.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

//Show Final Result
function showResult() {
    let percentage = Math.round((score / quiz.length) * 100);

    let grade = "";
    if (percentage >= 80) grade = "Excellent";
    else if (percentage >= 60) grade = "Good";
    else grade = "Needs Practice";

    document.querySelector(".container").innerHTML = `
<h1>Quiz Completed</h1>
<p>Score: ${score} / ${quiz.length} </p>
<p>Percentage: ${percentage}%</p>
<h2>${grade}</h2>
<button onclick="location.reload()">Restart Quiz</button>`;
}
