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
$('.download').append(
    '<span class="pointer en-cv">EN CV</span> - <span class="pointer fa-cv">FA CV</span>'
);

$('.en-cv').click(function () {
    window.location.href = 'https://github.com/BlackIQ/BlackIQ/raw/main/amirhossein-mohammadi-en.pdf';
});

$('.fa-cv').click(function () {
    window.location.href = 'https://github.com/BlackIQ/BlackIQ/raw/main/amirhossein-mohamamdi-fa.pdf';
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