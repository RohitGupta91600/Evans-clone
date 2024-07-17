let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    
    currentIndex += direction;
    
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    
    const translateX = -currentIndex * 100;
    slides.style.transform = `translateX(${translateX}%)`;
}