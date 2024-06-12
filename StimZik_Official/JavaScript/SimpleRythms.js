var color = localStorage.getItem("color");
document.documentElement.style.setProperty('--mainColor',color);

var savedProfilePicture = localStorage.getItem('profile_picture');
$('.profile_picture').css('background',savedProfilePicture)

 document.querySelector('.tip').innerHTML = localStorage.getItem("UserName")

 function playRhythm(rhythm) {
    let audio = new Audio();
    switch(rhythm) {
        case 'rhythm1':
            audio.src = `../Audio/accordion.m4a`;  
            break;
        case 'rhythm2':
            audio.src = `../Audio/guitar1.m4a`;  
            break;
        case 'rhythm3':
            audio.src = `../Audio/drum2.m4a`;  
            break;
        case 'rhythm4':
            audio.src = `../Audio/flute1.m4a`;  
            break;
        case 'rhythm5':
                audio.src = `../Audio/piano1.m4a`;  
                break;
        case 'rhythm6':
                    audio.src = `../Audio/trumpet1.m4a`;  
                    break;
        case 'rhythm7':
                        audio.src = `../Audio/saxophone1.m4a`;  
                        break;
        case 'rhythm8':
                            audio.src = `../Audio/violon1.m4a`;  
                            break;                     

                default:
            return;
    }
    audio.play();
}