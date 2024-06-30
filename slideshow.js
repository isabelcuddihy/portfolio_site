// slideshow.js
document.addEventListener('DOMContentLoaded', function() {
    const slideshows = document.querySelectorAll('.project-screenshots');

    slideshows.forEach(slideshow => {
        const slides = slideshow.querySelectorAll('.mySlides');
        let slideIndex = 0;

        function showSlides() {
            slides.forEach(slide => slide.style.display = 'none');
            slides[slideIndex].style.display = 'block';
        }

        function nextSlide() {
            slideIndex++;
            if (slideIndex >= slides.length) {
                slideIndex = 0; // Loop back to the beginning
            }
            showSlides();
        }

        function prevSlide() {
            slideIndex--;
            if (slideIndex < 0) {
                slideIndex = slides.length - 1; // Loop to the last slide
            }
            showSlides();
        }

        // Initial display of slides
        showSlides();

        // Event listeners for next and previous buttons
        const prevBtn = slideshow.querySelector('.prev');
        const nextBtn = slideshow.querySelector('.next');

        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
    });
});
