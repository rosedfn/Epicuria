document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const navDots = document.querySelectorAll('.nav-dot');
    let currentSlide = 0;
    const intervalTime = 5000;
    const recetteSlider = document.querySelector('.recettes-slider');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    const slidesCount = slides.length;

    function changeSlide(index) {
        slides[currentSlide].classList.remove('active');
        navDots[currentSlide].classList.remove('active');
        currentSlide = (index !== undefined) ? index : (currentSlide + 1) % slidesCount;
        slides[currentSlide].classList.add('active');
        navDots[currentSlide].classList.add('active');
    }

    navDots.forEach((dot, index) => {
        dot.addEventListener('click', () => changeSlide(index));
    });

    setInterval(() => changeSlide(), intervalTime);

    arrowLeft.addEventListener('click', () => {
        recetteSlider.scrollBy({
            top: 0,
            left: -350, // Taille d'une image de recette
            behavior: 'smooth'
        });
    });

    arrowRight.addEventListener('click', () => {
        recetteSlider.scrollBy({
            top: 0,
            left: 350, // Taille d'une image de recette
            behavior: 'smooth'
        });
    });
});
