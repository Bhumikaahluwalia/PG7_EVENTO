let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides[currentSlide].classList.remove('active'); // Hide current slide
    currentSlide = (index + slides.length) % slides.length; // Wrap around
    slides[currentSlide].classList.add('active'); // Show new slide
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Automatically change slides every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);


let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

// Function to show the current slide
function showSlides() {
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increment slide index
    slideIndex++;

    // Reset index if it exceeds the number of slides
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Start from the first slide again
    }

    // Show the current slide
    slides[slideIndex].style.display = "block";

    // Automatically change the slide every 2 seconds
    setTimeout(showSlides, 2000);
}

// Function to manually change slides
function changeSlide(n) {
    // Change slide index
    slideIndex += n;

    // Reset index if it exceeds the number of slides
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Loop back to the first slide
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1; // Loop to the last slide
    }

    // Show the current slide
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

// Initialize the slideshow on page load
showSlides();
