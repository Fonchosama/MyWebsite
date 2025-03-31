document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel__track");
    const slides = Array.from(track.children);
    const nextButton = document.querySelector(".carousel__button--right");
    const prevButton = document.querySelector(".carousel__button--left");
    const slideWidth = slides[0].getBoundingClientRect().width;
    let currentIndex = 0;
    const slidesToShow = 3;

    // Arrange slides next to each other
    slides.forEach((slide, index) => {
        slide.style.left = `${index * slideWidth}px`;
    });

    const moveSlides = (index) => {
        track.style.transform = `translateX(-${index * slideWidth}px)`;
        currentIndex = index;
    };

    nextButton.addEventListener("click", () => {
        if (currentIndex < slides.length - slidesToShow) {
            moveSlides(currentIndex + 1);
        } else {
            moveSlides(0); // Reset to beginning
        }
    });

    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            moveSlides(currentIndex - 1);
        } else {
            moveSlides(slides.length - slidesToShow); // Move to last set
        }
    });
});
