// const dt = new Date(yeargi);

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
$('.xbox h4').click(function () {
    $(this).next('.content-of-uls').slideToggle();
    if ($('.xbox h4 .open').hasClass('fa-arrow-down')) {
        $('.xbox h4 .open').removeClass('fa-arrow-down');
        $('.xbox h4 .open').addClass('fa-arrow-up');
    }
    else {
        $('.xbox h4 .open').removeClass('fa-arrow-up');
        $('.xbox h4 .open').addClass('fa-arrow-down');
    }
});

// Toggle release
$('.release').click(function () {
    $(this).next('.release-details').slideToggle();
});