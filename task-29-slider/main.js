let index = 0;

function changeSlide(n) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    index = (index + n + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${index * 100}%)`;
}
setInterval(() => changeSlide(1), 5000);
