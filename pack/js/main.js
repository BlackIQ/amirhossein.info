// Hide list
$('.content-of-uls').hide();

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
$('.xbox h4').click(function () {
    $(this).next('.content-of-uls').slideToggle();
    if ($('.open').hasClass('fa-arrow-down')) {
        $('.open').removeClass('fa-arrow-down');
        $('.open').addClass('fa-arrow-up');
    }
    else {
        $('.open').removeClass('fa-arrow-up');
        $('.open').addClass('fa-arrow-down');
    }
});