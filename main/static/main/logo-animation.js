window.addEventListener('DOMContentLoaded', (event) => {
    const logos = [
        '/static/main/logo1.svg',
        '/static/main/logo2.svg',
        '/static/main/logo3.svg',
        '/static/main/logo4.svg',
        '/static/main/logo5.svg',
        '/static/main/logo6.svg',
        '/static/main/logo7.svg',
        '/static/main/logo8.svg',
        '/static/main/logo9.svg',
        '/static/main/logo10.svg'
    ];

    let currentLogoIndex = 0;

    setInterval(() => {
        const logoImg = document.getElementById('animated-logo');
        logoImg.src = logos[currentLogoIndex];
        currentLogoIndex = (currentLogoIndex + 1) % logos.length; // Loop back to first logo
    }, 100); // Change image every 100 milliseconds
});
