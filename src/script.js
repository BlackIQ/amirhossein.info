// Math items
document.getElementById('years').innerHTML = '2017 - ' + new Date().getFullYear(); // Year
document.getElementById('age').innerHTML = new Date().getFullYear() - 2003; // Age

// Download CV
$('.download').append(
    '<span class="pointer en-cv">EN CV</span> - <span class="pointer fa-cv">FA CV</span>'
);

$('.en-cv').click(function () {
    window.location.href = 'https://github.com/BlackIQ/BlackIQ/raw/main/amirhossein-mohammadi-en.pdf';
});

$('.fa-cv').click(function () {
    window.location.href = 'https://github.com/BlackIQ/BlackIQ/raw/main/amirhossein-mohammadi-fa.pdf';
});
