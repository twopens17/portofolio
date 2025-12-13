$(document).ready(function () {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50
    });

    // Navbar Scroll Effect
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
            $('.navbar').css('background-color', 'rgba(8, 9, 10, 0.95)');
            $('.navbar').css('padding', '0.5rem 0');
        } else {
            $('.navbar').removeClass('scrolled');
            $('.navbar').css('background-color', 'var(--nav-bg)');
            $('.navbar').css('padding', '1rem 0');
        }
    });


});
