// script.js

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const headerHeight = header.clientHeight;

    // Function to create mini binary digits
    function createMiniBinaryDigit() {
        const miniBinary = document.createElement('div');
        miniBinary.classList.add('mini-binary');
        miniBinary.textContent = Math.random() < 0.5 ? '1' : '0'; // Randomly generate '1' or '0'
        miniBinary.style.left = Math.random() * 100 + 'vw'; // Randomize left position
        miniBinary.style.top = Math.random() * headerHeight + 'px'; // Randomize top position within header
        header.appendChild(miniBinary);
    }

    // Generate initial mini binary digits
    const numberOfDigits = 35; // Number of digits to generate
    for (let i = 0; i < numberOfDigits; i++) {
        createMiniBinaryDigit();
    }

    // Function to animate mini binary digits
    function animateMiniBinaryDigits() {
        const digits = document.querySelectorAll('.mini-binary');

        digits.forEach(function(digit) {
            const delay = Math.random() * 10; // Random delay for each digit
            digit.style.animationDelay = delay + 's';
        });
    }

    // Trigger animation after a brief delay to ensure animation starts smoothly
    setTimeout(function() {
        header.classList.add('loaded');
        animateMiniBinaryDigits();
    }, 500); // Adjust delay as needed
});
