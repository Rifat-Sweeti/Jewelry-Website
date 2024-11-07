let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    changeSlide(currentSlide + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
    changeSlide(currentSlide - 1);
});

function changeSlide(newIndex) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (newIndex + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
}

setInterval(() => {
    changeSlide(currentSlide + 1);
}, 5000);