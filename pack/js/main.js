// Year
const d = new Date();
document.getElementById('years').innerHTML = '2017 - ' + d.getFullYear();

// Hide items
$('.content-of-uls').hide(); // Hide ULs
$('.release-details').hide(); // Hide details

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
    window.location.href = 'https://github.com/BlackIQ/BlackIQ/raw/main/amirhossein-mohamamdi-fa.pdf';
});

// Open xBox
$('.open').css({
    'cursor': 'pointer',
});

// Toggle xBox list
$('.xbox h4 .open').click(function () {
    $(this).parents('.xbox h4').next('.content-of-uls').slideToggle();
    if ($(this).hasClass('fa-arrow-down')) {
        $(this).removeClass('fa-arrow-down');
        $(this).addClass('fa-arrow-up');
    }
    else {
        $(this).removeClass('fa-arrow-up');
        $(this).addClass('fa-arrow-down');
    }
});

// Toggle release
$('.release').click(function () {
    $(this).next('.release-details').slideToggle();
});