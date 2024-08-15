window.addEventListener('DOMContentLoaded', () => {
    let currentLogoIndex = 0;

    setInterval(() => {
        const logoImg = document.getElementById('animated-logo');
        logoImg.src = logos[currentLogoIndex];
        currentLogoIndex = (currentLogoIndex + 1) % logos.length; // Loop back to first logo
    }, 100); // Change image every 100 milliseconds
});