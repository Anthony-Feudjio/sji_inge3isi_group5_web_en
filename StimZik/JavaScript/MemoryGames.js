var color = localStorage.getItem("color");
document.documentElement.style.setProperty('--mainColor', color);

var savedProfilePicture = localStorage.getItem('profile_picture');
$('.profile_picture').css('background', savedProfilePicture)

document.querySelector('.tip').innerHTML = localStorage.getItem("UserName")

document.addEventListener('DOMContentLoaded', () => {
    const continueBtn = document.getElementById('continue-btn');
    const introText = document.getElementById('intro-text');
    const quizContainer = document.getElementById('quiz-container');
    
    let currentQuestion = 0;
    let score = 0;
    let scorePart1 = 0;
    let scorePart2 = 0;
    let part = 1;

    const questionsPart1 = [
        { audio: '../Audio/accordion.M4A', answer: ['accordion'] },
        { audio: '../Audio/drum1.M4A', answer: ['drum'] },
        { audio: '../Audio/violon1.M4A', answer: ['violon'] },
        { audio: '../Audio/flute1.M4A', answer: ['flute'] },
        { audio: '../Audio/guitar2.M4A', answer: ['guitar'] },
        { audio: '../Audio/saxophone1.M4A', answer: ['saxophone'] },
        { audio: '../Audio/drum2.M4A', answer: ['drum'] },
        { audio: '../Audio/piano2.M4A', answer: ['piano'] },
        { audio: '../Audio/saxophone2.M4A', answer: ['saxophone'] },
        { audio: '../Audio/guitar1.M4A', answer: ['guitar'] },
        { audio: '../Audio/trumpet1.M4A', answer: ['trumpet'] },
        { audio: '../Audio/violon2.M4A', answer: ['violon'] },
        { audio: '../Audio/piano1.M4A', answer: ['piano'] },
        { audio: '../Audio/flute2.M4A', answer: ['flute'] },
        { audio: '../Audio/trumpet2.M4A', answer: ['trumpet'] }
    ];

    const questionsPart2 = [
        { audio: '../Audio/guitarandflute.M4A', answer: ['guitar and flute', 'flute and guitar'] },
        { audio: '../Audio/pianoanddrum.M4A', answer: ['drum and piano', 'piano and drum'] },
        { audio: '../Audio/trumpetanddrums.M4A', answer: ['trumpet and drum', 'drum and trumpet'] },
        { audio: '../Audio/trumpetandflut.M4A', answer: ['trumpet and flute', 'flute and trumpet'] },
        { audio: '../Audio/GuitarandPiano.M4A', answer: ['guitar and piano', 'piano and guitar'] }
    ];

    continueBtn.addEventListener('click', () => {
        if (part === 1) {
            introText.style.display = 'none';
            startQuiz();
        } else if (part === 2) {
            startQuiz();
        } else {
            resetQuiz();
        }
    });

    function startQuiz() {
        if (part === 1 && currentQuestion < questionsPart1.length) {
            const currentAudio = new Audio(questionsPart1[currentQuestion].audio);
            quizContainer.innerHTML = `
                <p class="question">Listen well:</p>
                <input type="text" id="answer" class="answer" placeholder="Enter instrument name">
                <button id="submit-btn">Submit</button>
            `;
            quizContainer.style.display = 'block';

            setTimeout(() => {
                currentAudio.play();
            }, 2000);

            document.getElementById('submit-btn').addEventListener('click', checkAnswer);
        } else if (part === 2 && currentQuestion < questionsPart2.length) {
            const currentAudio = new Audio(questionsPart2[currentQuestion].audio);
            quizContainer.innerHTML = `
                <p class="question">Listen well:</p>
                <input type="text" id="answer" class="answer" placeholder="Enter both instrument names separated by 'and'">
                <button id="submit-btn">Submit</button>
            `;
            quizContainer.style.display = 'block';

            setTimeout(() => {
                currentAudio.play();
            }, 2000);

            document.getElementById('submit-btn').addEventListener('click', checkAnswer);
        } else if (part === 1 && currentQuestion === questionsPart1.length) {
            scorePart1 = score;
            currentQuestion = 0;
            score = 0;
            part = 2;
            quizContainer.innerHTML = `
                <p class="question1">Ready for a double dose of musical mystery?</p>
                <p class="question1">This next challenge features a melody with two hidden instruments! Sharpen those ears and see if you can identify both instruments working together to create the sound. Good luck! Press continue to play.</p>
            `;
            continueBtn.style.display = 'block';
        } else {
            showFinalScore();
        }
    }

    function checkAnswer() {
        const userAnswer = document.getElementById('answer').value.toLowerCase();
        const correctAnswers = part === 1 ? questionsPart1[currentQuestion].answer : questionsPart2[currentQuestion].answer;

        if (correctAnswers.some(answer => {
            const [first, second] = answer.split(' and ');
            const [userFirst, userSecond] = userAnswer.split(' and ');
            return (first === userFirst && second === userSecond) || (first === userSecond && second === userFirst);
        })) {
            score++;
        }

        currentQuestion++;

        if (part === 1 && (currentQuestion === 5 || currentQuestion === 10)) {
            alert(`Your score is ${score} out of ${currentQuestion}`);
            setTimeout(() => {
                startQuiz();
            }, 100); // Automatically launch the next question after displaying the score
        } else {
            startQuiz();
        }
    }

    function showFinalScore() {
        scorePart2 = score;
        quizContainer.innerHTML = `
            <p class="question1">Quiz Completed!</p>
            <p class="question1">Your final score for the first part is ${scorePart1} out of ${questionsPart1.length}</p>
            <p class="question1">Your final score for the second part is ${scorePart2} out of ${questionsPart2.length}</p>
            <p class="question1">Total score: ${scorePart1 + scorePart2} out of ${questionsPart1.length + questionsPart2.length}</p>
            <button id="restart-btn">Play Again</button>
        `;
        document.getElementById('restart-btn').addEventListener('click', () => {
            resetQuiz();
            introText.style.display = 'none';
            startQuiz();
        });
    }

    function resetQuiz() {
        currentQuestion = 0;
        score = 0;
        scorePart1 = 0;
        scorePart2 = 0;
        part = 1;
        introText.style.display = 'block';
        quizContainer.innerHTML = '';
    }
});
