document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.navbar-nav .nav-item a').forEach(function(navLink) {
        var img = navLink.querySelector('img');
        var originalSrc = img.getAttribute('src');
        var hoverSrc = img.getAttribute('data-hover');

        // Set the image based on active class
        img.setAttribute('src', navLink.classList.contains('active') ? hoverSrc : originalSrc);

        // Mouse enter event
        navLink.addEventListener('mouseenter', function() {
            if (!navLink.classList.contains('active')) {
                img.setAttribute('src', hoverSrc);
            }
        });

        // Mouse leave event
        navLink.addEventListener('mouseleave', function() {
            if (!navLink.classList.contains('active')) {
                img.setAttribute('src', originalSrc);
            }
        });
    });
});
