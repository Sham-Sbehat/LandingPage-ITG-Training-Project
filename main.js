// For theme dark and light
$(document).ready(function() {
    const $themeSwitcher = $('#themeSwitcher');
    const $themeIcon = $('#themeIcon');
    const $body = $('body');
    
    $themeSwitcher.on('click', function() {
        if ($body.hasClass('light-mode')) {
            // Switch to Dark Mode
            $body.removeClass('light-mode').addClass('dark-mode');
            $themeIcon.removeClass('bi-moon').addClass('bi-sun'); // Change icon to Sun
        } else {
            // Switch to Light Mode
            $body.removeClass('dark-mode').addClass('light-mode');
            $themeIcon.removeClass('bi-sun').addClass('bi-moon'); // Change icon to Moon
        }
    });
});

// For Slider in About-Me Section 
document.querySelectorAll('.slider').forEach(slider => {
    // Function to update the background of the slider
    const updateSliderBackground = (slider) => {
        const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
        slider.style.background = `linear-gradient(to right, #f2610a ${value}%, #ddd ${value}%)`;
    };

    // Initialize background on page load
    updateSliderBackground(slider);

    // Update background on input change
    slider.addEventListener('input', () => {
        updateSliderBackground(slider);
    });
});


// Testimonial section
$(document).ready(function() {
    let currentIndex = 0;
    const totalCards = $('.testimonial-card').length;

    // Function to update the slider position
    function updateSliderPosition() {
        const offset = currentIndex * -33.33; // Each card takes up 33.33% of the width
        $('.testimonial-container').css('transform', `translateX(${offset}%)`);
    }

    // Set active dot
    function setActiveDot(index) {
        $('.dot').removeClass('active');
        $('.dot').eq(index).addClass('active');
    }

    // Set active card
    function setActiveCard(index) {
        $('.testimonial-card').removeClass('active');
        $('.testimonial-card').eq(index).addClass('active');
    }

    // Navigate to the selected slide based on dot click
    $('.dot').click(function() {
        const index = $(this).index();
        currentIndex = index;
        setActiveCard(currentIndex);
        setActiveDot(currentIndex);
        updateSliderPosition(); // Move the slider
    });
});
