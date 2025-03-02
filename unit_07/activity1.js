var largeBox = document.getElementById('lg');

for (let i = 1; i < 9; i++) {
    let square = document.getElementById('sq'+i);
    square.addEventListener('mouseover', function() { alter(square); });
}

function alter(x) {
    var xvar = window.getComputedStyle(x);
    largeBox.style.backgroundColor = xvar.backgroundColor;
}
