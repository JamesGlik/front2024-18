const slides = document.querySelectorAll(".slide");
const slideButtons = document.querySelectorAll(".slide-btn");

let currentSlide = 0;
let sliderIntervalId = null;


function loadSlides() {
    slides.forEach((slide, index) => {
        slide.classList.toggle("active", index === currentSlide);
        slideButtons[index].classList.toggle("active", index === currentSlide);
    });
}


function goToNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    loadSlides();
}


slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
        currentSlide = parseInt(button.dataset.index);
        loadSlides();
    });
});


sliderIntervalId = setInterval(goToNextSlide, 5000);


const slidesWrapper = document.querySelector(".slides-wrapper");
slidesWrapper.addEventListener("mouseenter", () => {
    clearInterval(sliderIntervalId);
});

slidesWrapper.addEventListener("mouseleave", () => {
    sliderIntervalId = setInterval(goToNextSlide, 5000);
});


loadSlides();