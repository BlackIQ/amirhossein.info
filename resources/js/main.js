// Math items
document.getElementById('years').innerHTML = '2017 - ' + new Date().getFullYear(); // Year
document.getElementById('age').innerHTML = new Date().getFullYear() - 2003; // Age

// Hide items
$('.content-of-uls').hide(); // Hide ULs

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
$('.xbox h4').click(function () {
    $(this).next('.content-of-uls').slideToggle(800);
    if ($(this).children('.open').hasClass('fa-chevron-down')) {
        $(this).children('.open').removeClass('fa-chevron-down');
        $(this).children('.open').addClass('fa-chevron-up');
    }
    else {
        $(this).children('.open').removeClass('fa-chevron-up');
        $(this).children('.open').addClass('fa-chevron-down');
    }
});