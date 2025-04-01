document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel__track");
    const slides = Array.from(track.children);
    const prevButton = document.querySelector(".carousel__button--left");
    const nextButton = document.querySelector(".carousel__button--right");

    let currentIndex = 0;

    function updateSlidePosition() {
        const slideWidth = slides[0].offsetWidth; // Obtiene el ancho real del slide
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    nextButton.addEventListener("click", function () {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Vuelve al inicio si es el último
        }
        updateSlidePosition();
    });

    prevButton.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1; // Va al final si está en el primero
        }
        updateSlidePosition();
    });

    // Asegurarse de que el tamaño se ajuste cuando cambia la ventana
    window.addEventListener("resize", function () {
        updateSlidePosition();
    });

    // Llamar a la función al inicio para ajustar la posición
    updateSlidePosition();
});
