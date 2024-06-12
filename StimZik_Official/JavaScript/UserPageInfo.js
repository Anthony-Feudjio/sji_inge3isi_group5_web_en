//-------------------------Profile Java Script -------------------
// Set Profile Picture

var theme = localStorage.getItem("color");
if(theme){
    document.documentElement.style.setProperty('-mainColor',theme)
}

document.querySelector('.tip').innerHTML = localStorage.getItem("UserName")

$('.namy').value = localStorage.getItem("UserName")


$(".profile_picture_choice").click(function(){
    var pp = $(this).css('background');
    $('.profile_picture').css('background',pp);
    localStorage.setItem('profile_picture', pp);
});

var savedProfilePicture = localStorage.getItem('profile_picture');
if (savedProfilePicture) {
    $('.profile_picture').css('background', savedProfilePicture);
}

//Pseudo Info Update onclick of Finish Button
$('.but_finish').click(function(){
    var f = $('input').val() ;
    $('.tip').text(f)
    localStorage.setItem("UserName",f);
});

var UserName = localStorage.getItem('f');
if(UsernName){
    $('.tip').text(UserName)
}

function changeColor() {
    // Get the selected color value from the color picker input
    const color = document.getElementById('colorPicker').value;
    document.documentElement.style.setProperty('--mainColor', color);
    localStorage.setItem("color",color);
    document.querySelector('.cc').innerHTML= 'Changed ✅'
    setTimeout(() => {
        document.querySelector('.cc').innerHTML= 'Change Theme'
    }, 1000);
}

function goBack() {
    history.back();
}




