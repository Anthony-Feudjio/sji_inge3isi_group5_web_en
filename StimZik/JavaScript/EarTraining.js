//---------------------Ear Trainin JavaScrip-----------------
var color = localStorage.getItem("color");
document.documentElement.style.setProperty('--mainColor',color);

var savedProfilePicture = localStorage.getItem('profile_picture');
$('.profile_picture').css('background',savedProfilePicture)

 document.querySelector('.tip').innerHTML = localStorage.getItem("UserName")

//-------------------------------------------------------------------------
const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
let currentNotes = [];
let userNotes = [];
let level = 1;
let correctGuesses = 0;
const totalGuesses = 7;
let audio = new Audio();

// Play the current sequence of notes
function playNotes() {
    userNotes = []; // Reset user's sequence
    let delay = 0;
    currentNotes = [];
    for (let i = 0; i < level; i++) {
        const note = notes[Math.floor(Math.random() * notes.length)];
        currentNotes.push(note);
        setTimeout(() => {
            audio.src = `../Sounds/${note}.mp3`;
            audio.play();
        }, delay);
        delay += 1000; // Delay between each note
    }
}

// Add user's note to the sequence and check the answer
function addUserNoteAndCheck(note) {
    userNotes.push(note);
    if (userNotes.length === currentNotes.length) {
        checkAnswer();
    }
}

// Check if user's sequence matches the played sequence
function checkAnswer() {
    const resultDiv = document.getElementById('result');
    if (userNotes.join('') === currentNotes.join('')) {
        resultDiv.innerText = 'Correct!';
        correctGuesses++;
        updateProgressBar();
        if (correctGuesses < totalGuesses) {
            // Play next note in the current level
            playNotes();
        } else if (correctGuesses >= totalGuesses && correctGuesses < totalGuesses + 3) {
            // Increase level and play sequence
            level++;
            alert(`Level up! Now you need to guess ${level} notes.`);
            playNotes();
        } else {
            // Exercise complete
            resultDiv.innerText = 'Exercise Complete!';
        }
    } else {
        resultDiv.innerText = 'Try again!';
        setTimeout(() => {
            resultDiv.innerText = '';
        }, 2000);
        // Reset and replay the sequence
        playNotes();
    }
}

// Update the progress bar
function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    let progress = (correctGuesses / (totalGuesses + 3)) * 100;
    progressBar.style.width = `${progress}%`;
}

document.addEventListener('DOMContentLoaded', () => {
    // Attach event listeners to the buttons with class 'pioBut'
    const noteButtons = document.querySelectorAll('.pioBut');
    noteButtons.forEach((button, index) => {
        button.addEventListener('click', () => addUserNoteAndCheck(notes[index]));
    });
});
