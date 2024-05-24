window.onscroll = function () {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};

document.addEventListener("DOMContentLoaded", function () {
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeInUp');
            }
        });
    });

    document.querySelectorAll('.animatable').forEach(img => {
        observer.observe(img);
    });
});