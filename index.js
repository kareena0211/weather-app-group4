var preloader = document.querySelector('#loading');
function myFunction() {
    setTimeout(function() {
        preloader.style.opacity = '0';
        setTimeout(function() {
            preloader.style.display = 'none';
        }, 100); // Adjust the delay as needed
    }, 2000); // Adjust the delay as needed
}