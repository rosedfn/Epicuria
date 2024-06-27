document.addEventListener('DOMContentLoaded', () => {
    let carouselIndex = 0;
    const carouselImages = document.querySelectorAll('.carousel img');
    const dots = document.querySelectorAll('.dot');

    const changeImage = (index) => {
        carouselImages.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    };

    const nextImage = () => {
        carouselIndex = (carouselIndex + 1) % carouselImages.length;
        changeImage(carouselIndex);
    };

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            carouselIndex = parseInt(e.target.getAttribute('data-index'));
            changeImage(carouselIndex);
        });
    });

    setInterval(nextImage, 5000); // Change image every 5 seconds
});
