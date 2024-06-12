var color = localStorage.getItem("color");
document.documentElement.style.setProperty('--mainColor', color);

var savedProfilePicture = localStorage.getItem('profile_picture');
$('.profile_picture').css('background', savedProfilePicture)

document.querySelector('.tip').innerHTML = localStorage.getItem("UserName")

// Array of slide contents
const slides = [
    {
        heading: "STIMZIK",
        body: "Stimzik is a fun and educational web app designed to introduce children to the world of music!  Through a variety of engaging activities, kids can learn musical notes, complete exercises, test their knowledge with quizzes, improve their memory with games, develop their ear training skills, and practice simple rhythms. Created by Feudjio Anthony and  Signe Mexes, along with Co-ordination of Dr Naha at Saint Jean University in Cameroon, Stimzik is a valuable tool for parents and educators looking to spark a love of music in children."
    },
    {
        heading: "LEARNING NOTES",
        body: "Ignite your child's inner musician with Stimzik! This interactive web app takes them on a musical adventure, starting with the fundamentals: learning the 7 basic notes on the piano!  Do, Re, Mi, Fa, Sol, La, Ti (or Si) - these notes will become the building blocks for their musical journey. Stimzik makes learning fun and engaging, fostering a love of music from a young age. Click on the piano keys to get sounds."
    },
    {
        heading: "EAR TRAINING ",
        body: "Sharpen those young ears with Stimzik's Ear Training module! This interactive feature goes beyond just learning the 7 basic piano notes (Do, Re, Mi, Fa, Sol, La, Ti/Si) - it tests your child's ability to recognize them by sound. Imagine a fun game where a note plays, and they have to guess it correctly! Each correct answer advances a progress bar, keeping them motivated and engaged as they develop their musical perception. Stimzik makes ear training an exciting adventure, building a strong foundation for their musical journey."
  
    },
    {
        heading: "SIMPLE RTHYM",
        body: " Stimzik's Simple Rhythms module is the perfect next step in your child's musical journey. This engaging feature introduces them to the concept of rhythm, teaching them to recognize and play simple patterns.  Stimzik's Simple Rhythms module is the perfect next step in your child's musical journey. This engaging feature introduces them to the concept of rhythm, teaching them to recognize and play simple patterns.  Stimzik's Simple Rhythms module is the perfect next step in your child's musical journey. This engaging feature introduces them to the concept of rhythm, teaching them to recognize and play simple patterns.  Stimzik's Simple Rhythms module is the perfect next step in your child's musical journey. This engaging feature introduces them to the concept of rhythm, teaching them to recognize and play simple patterns."
    },
    {
        heading: "MEMORY GAMES",
        body: " Boost your child's memory and musical knowledge with Stimzik's engaging Memory Games! This exciting feature challenges their recall in two levels:Level 1 of Stimzik's Memory Games tests auditory recall in a single-instrument showdown.  Children listen to an audio clip and identify the instrument's name in just one word. This exciting challenge sharpens their memory and introduces them to a variety of instruments.Level 2 ups the ante!  Here, children listen to an audio featuring a duet of two instruments. Can they rise to the challenge and name both instruments correctly? This level refines their ability to distinguish between multiple sounds, further strengthening their musical knowledge."
    },
    {
        heading: "INTERACTIVE QUIZ",
        body: "Stimzik's interactive music quiz keeps learning fun and engaging. It has 30 questions grouped in sets of three, with real-time feedback provided for each set. Once all questions are answered, a rapid answer review reinforces musical knowledge by showcasing all the answers at once."
    }
];

let currentSlide = 0;

document.getElementById('continue-btn').addEventListener('click', function() {
    document.getElementById('intro-text').style.display = 'none';
    showSlide(currentSlide);
});

function showSlide(index) {
    const container = document.getElementById('quiz-container');
    container.innerHTML = `
        <h2 style="text-align: center; color: var(--mainColor); font-size: 35px; margin: 0 auto; width: 80%;">${slides[index].heading}</h2>
        <p class="intro-text">${slides[index].body}</p>
        <button id="next-btn" style="position: absolute; right: 20px; bottom: 20px;">${index < slides.length - 1 ? 'Next' : 'End'}</button>
    `;
    container.style.display = 'inline';
    

    document.getElementById('next-btn').addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });
}
