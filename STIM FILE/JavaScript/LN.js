var color = localStorage.getItem("color");
document.documentElement.style.setProperty('--mainColor',color);

var savedProfilePicture = localStorage.getItem('profile_picture');
$('.profile_picture').css('background',savedProfilePicture)

 document.querySelector('.tip').innerHTML = localStorage.getItem("UserName")

 document.addEventListener('DOMContentLoaded', () => {
    const sounds = {
        j1: 'C.mp3',
        j2: 'D.mp3',
        j3: 'E.mp3',
        j4: 'F.mp3',
        j5: 'G.mp3',
        j6: 'A.mp3',
        j7: 'B.mp3'
    };

    const keyMap = {
        'a': 'j1',
        's': 'j2',
        'd': 'j3',
        'f': 'j4',
        'g': 'j5',
        'h': 'j6',
        'j': 'j7'
    };

    document.querySelectorAll('.pioBut').forEach(button => {
        button.addEventListener('click', () => {
            const soundId = button.id;
            if (sounds[soundId]) {
                playSound(soundId);
                showBubble(button);
            }
        });
    });

    document.addEventListener('keydown', (event) => {
        const soundId = keyMap[event.key];
        if (soundId && sounds[soundId]) {
            const button = document.getElementById(soundId);
            playSound(soundId);
            showBubble(button);
        }
    });

    function playSound(soundId) {
        const audio = new Audio(`Sounds/${sounds[soundId]}`);
        audio.play();
    }

    function showBubble(button) {
        const bubble = document.createElement('span');
        bubble.className = 'bubble';
        bubble.innerText = button.innerText;
        button.appendChild(bubble);

        setTimeout(() => {
            bubble.remove();
        }, 1000); // Duration of the bubble display
    }
});
