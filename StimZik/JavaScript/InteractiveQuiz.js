var color = localStorage.getItem("color");
document.documentElement.style.setProperty('--mainColor',color);

var savedProfilePicture = localStorage.getItem('profile_picture');
$('.profile_picture').css('background',savedProfilePicture)

document.querySelector('.tip').innerHTML = localStorage.getItem("UserName")

const questions = [
    { question: "What is the largest member of the string family?", answer: "The double bass" },
    { question: "Which instrument is known as the 'king of instruments'?", answer: "The pipe organ" },
    { question: "What is the highest-pitched string instrument in an orchestra?", answer: "The violin" },
    { question: "Which woodwind instrument uses a double reed?", answer: "The oboe" },
    { question: "Name a percussion instrument that uses a membrane to produce sound.", answer: "The drum" },
    { question: "What type of instrument is a piano classified as?", answer: "A string and percussion instrument" },
    { question: "What is the brass instrument with the lowest pitch?", answer: "The tuba" },
    { question: "Which instrument is sometimes called a 'French fiddle'?", answer: "The violin" },
    { question: "Name a woodwind instrument that doesn't use a reed.", answer: "The flute" },
    { question: "What is the smallest member of the brass family?", answer: "The trumpet" },
    { question: "Which instrument is known for having 47 strings and pedals to change pitch?", answer: "The harp" },
    { question: "What type of instrument is a marimba?", answer: "A percussion instrument" },
    { question: "Which instrument family does the saxophone belong to?", answer: "The woodwind family" },
    { question: "Name an instrument that uses a bow to produce sound.", answer: "The cello" },
    { question: "What is the keyboard instrument where air is blown through pipes to produce sound?", answer: "The organ" },
    { question: "Which percussion instrument is tuned and has a keyboard layout?", answer: "The xylophone" },
    { question: "What type of instrument is a didgeridoo?", answer: "A wind instrument" },
    { question: "Which string instrument is played by plucking with the fingers?", answer: "The guitar" },
    { question: "Name a brass instrument that uses a slide to change pitches.", answer: "The trombone" },
    { question: "What type of instrument is a theremin?", answer: "An electronic instrument" },
    { question: "Which keyboard instrument produces sound by plucking strings with quills?", answer: "The harpsichord" },
    { question: "What is the main material used to make the body of a clarinet?", answer: "Wood (traditionally African Blackwood)" },
    { question: "Name the instrument that is often featured in jazz bands and has a curved body.", answer: "The saxophone" },
    { question: "What type of instrument is a steel drum?", answer: "A percussion instrument" },
    { question: "Which brass instrument is coiled and has a wide bell?", answer: "The French horn" },
    { question: "What is the traditional Japanese string instrument with 13 strings?", answer: "The koto" },
    { question: "Name an instrument that is part of the lute family.", answer: "The mandolin" },
    { question: "Which wind instrument has keys but no reeds?", answer: "The piccolo" },
    { question: "What type of instrument is a balalaika?", answer: "A string instrument" },
    { question: "What instrument is commonly used in Scottish music and has a drone?", answer: "The bagpipes" }
];

let currentQuestionIndex = 0;
let score = 0;

document.getElementById("continue-btn").addEventListener("click", startQuiz);

function startQuiz() {
    document.getElementById("intro-text").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("bodyquiz-div").style.backgroundColor = "rgba(255, 255, 255, 0.4)"; // White with reduced opacity
    displayQuestions();
}

function displayQuestions() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = "";

    const form = document.createElement("form");
    form.id = "quiz-form";

    for (let i = 0; i < 3; i++) {
        const questionIndex = currentQuestionIndex + i;
        if (questionIndex >= questions.length) break;

        const questionElement = document.createElement("div");
        questionElement.classList.add("question");
        questionElement.innerHTML = `
            <p>${questions[questionIndex].question}</p>
            <input type="text" class="answer" data-index="${questionIndex}">
        `;

        form.appendChild(questionElement);
    }

    const submitButton = document.createElement("button");
    submitButton.id = "submit-btn";
    submitButton.textContent = "Submit";
    form.appendChild(submitButton);

    form.addEventListener("submit", handleSubmit);
    quizContainer.appendChild(form);
}

function handleSubmit(event) {
    event.preventDefault();

    const answers = document.querySelectorAll(".answer");
    let correctAnswers = 0;

    answers.forEach(answerInput => {
        const questionIndex = answerInput.getAttribute("data-index");
        const userAnswer = answerInput.value.trim().toLowerCase();
        const correctAnswer = questions[questionIndex].answer.toLowerCase();

        if (userAnswer === correctAnswer) {
            correctAnswers++;
        }
    });

    score += correctAnswers;
    alert(`You got ${correctAnswers} out of ${answers.length} correct.`);

    currentQuestionIndex += 3;

    if (currentQuestionIndex < questions.length) {
        displayQuestions();
    } else {
        alert(`Quiz complete! Your final score is ${score} out of ${questions.length}.`);
        displayAnswers();
        
    }
}

function displayAnswers() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = "";

    let answerIndex = 0;

    function showNextThreeAnswers() {
        quizContainer.innerHTML = "";
        for (let i = 0; i < 3; i++) {
            if (answerIndex >= questions.length) {
                clearInterval(answerInterval);
                return;
            }
            const answerElement = document.createElement("div");
            answerElement.classList.add("answer");
            answerElement.innerHTML = `
                <p>Q: ${questions[answerIndex].question}</p>
                <p>A: ${questions[answerIndex].answer}</p>
            `;
            quizContainer.appendChild(answerElement);
            answerIndex++;
        }
    }

    showNextThreeAnswers();
    const answerInterval = setInterval(showNextThreeAnswers, 5000);
}


function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    startQuiz();
}

document.getElementById("continue-btn").addEventListener("click", function() {
    if (currentQuestionIndex >= questions.length) {
        restartQuiz();
    }
});