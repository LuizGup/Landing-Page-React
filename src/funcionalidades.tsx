window.onscroll = () => {
  const navbar = document.getElementById("navbar");
  if (navbar) { // Verifica se o navbar não é nulo
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
};

// document.addEventListener("DOMContentLoaded", function () {
//   var observer = new IntersectionObserver(function (entries) {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("fadeInUp");
//       }
//     });
//   });

//   document.querySelectorAll(".animatable").forEach((img) => {
//     observer.observe(img);
//   });
// });
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fadeInUp");
        }
      });
    });
  
    const animatableElements = document.querySelectorAll(".animatable");
    animatableElements.forEach((img) => {
      observer.observe(img as Element);
    });
  });