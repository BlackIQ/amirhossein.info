// Math items
document.getElementById('years').innerHTML = '2017 - ' + new Date().getFullYear(); // Year
document.getElementById('age').innerHTML = new Date().getFullYear() - 2003; // Age

// Disable right click
window.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

// Hide items
$('.content-of-uls').hide(); // Hide ULs
$('.release-details').hide(); // Hide details
$('.main').hide(); // Hide all page

$('.main').fadeIn(3000); // Show page

// Toggle theme
$('.toggle').click(function () {
    if ($('.main').hasClass('light')) {
        $('.main').removeClass('light');
        $('.main').addClass('dark');
        $('.toggle-icon').removeClass('fa-moon');
        $('.toggle-icon').addClass('fa-sun');
    } else if ($('.main').hasClass('dark')) {
        $('.main').removeClass('dark');
        $('.main').addClass('light');
        $('.toggle-icon').removeClass('fa-sun');
        $('.toggle-icon').addClass('fa-moon');
    }
});

// Download CV
$('.download').text('Download CV');

$('.download').css({
    'cursor': 'pointer',
    'font-weight': 'bold',
});

$('.download').click(function () {
    window.location.href = 'https://github.com/BlackIQ/BlackIQ/raw/main/amirhossein-mohamamdi-en.pdf';
});

// Open xBox
$('.open').css({
    'cursor': 'pointer',
});

// Toggle xBox list
$('.xbox h4 .open').click(function () {
    $(this).parents('.xbox h4').next('.content-of-uls').slideToggle();
    if ($(this).hasClass('fa-bars')) {
        $(this).removeClass('fa-bars');
        $(this).addClass('fa-times');
    }
    else {
        $(this).removeClass('fa-times');
        $(this).addClass('fa-bars');
    }
});

// Open release
$('.release').css({
    'cursor': 'pointer',
});

// Toggle release
$('.release').click(function () {
    $(this).next('.release-details').slideToggle();
});

// Get user data
window.onload = function onOpen() {
    console.log(navigator.userAgent); // Log UserAgent
    document.getElementById('music').play(); // Play music
}