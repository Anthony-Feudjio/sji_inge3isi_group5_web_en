var color = localStorage.getItem("color");
document.documentElement.style.setProperty('--mainColor', color);

var savedProfilePicture = localStorage.getItem('profile_picture');
$('.profile_picture').css('background', savedProfilePicture)

document.querySelector('.tip').innerHTML = localStorage.getItem("UserName")

