let questions = [
    {
        question: "Capital of India?",
        options: ["Delhi", "Mumbai", "Pune", "Chennai"],
        answer: "Delhi"
    },
    {
        question: "2 + 2 = ?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "HTML stands for?",
        options: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyper Transfer Markup Language",
            "None"
        ],
        answer: "Hyper Text Markup Language"
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = "";

let question = document.getElementById("question");
let buttons = document.querySelectorAll(".option");
let nextBtn = document.getElementById("nextBtn");
let scoreText = document.getElementById("score");

function showQuestion() {

    let q = questions[currentQuestion];

    question.innerText = q.question;

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].innerText = q.options[i];
        buttons[i].style.backgroundColor = "";
    }
}

for(let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function() {

        for(let j = 0; j < buttons.length; j++) {
            buttons[j].style.backgroundColor = "";
        }

        buttons[i].style.backgroundColor = "lightgreen";

        selectedAnswer = buttons[i].innerText;
    });
}

nextBtn.addEventListener("click", function() {

    if(selectedAnswer === "") {
        alert("Please select an option!");
        return;
    }

    if(selectedAnswer === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;
    selectedAnswer = "";

    if(currentQuestion < questions.length) {
        showQuestion();
    }
    else {

        question.innerText = "Quiz Finished!";

        document.getElementById("options").innerHTML = "";

        nextBtn.style.display = "none";

        scoreText.innerText =
        `Your Score: ${score}/${questions.length}`;
    }
});

showQuestion();