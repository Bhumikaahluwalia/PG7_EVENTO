let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides() {
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increment the slide index
    slideIndex++;

    // If the slide index exceeds the number of slides, reset it to 1
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";

    // Automatically change the slide every 2 seconds
    setTimeout(showSlides, 2000);
}

function changeSlide(n) {
    // Manually control slide change
    slideIndex += n;

    // If the slide index exceeds the number of slides, reset it to 1
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // If the slide index is less than 1, set it to the last slide
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";
}

// Initialize the slideshow on page load
showSlides();
