document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    const div2 = document.querySelector('.div2');
    const originalBackgroundImage = 'url(../Images/african-kid-enjoying-life.jpg)';

    boxes.forEach(box => {
        box.addEventListener('click', (event) => {
            const imgSrc = box.querySelector('img').src;
            div2.style.backgroundImage = `url(${imgSrc})`;
            event.stopPropagation(); // Prevent the click event from propagating to the body
        });
    });

    document.body.addEventListener('click', (event) => {
        if (!event.target.closest('.box')) {
            div2.style.backgroundImage = originalBackgroundImage;
        }
    });

    setInterval(() => {
        div2.classList.toggle('swap');
    }, 3000);
});
