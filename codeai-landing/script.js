// Select elements
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".overlay");

// Toggle sidebar
toggle.onclick = () => {
    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");
};

// Close sidebar when clicking overlay
overlay.onclick = () => {
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
};

// Close sidebar when clicking any link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.onclick = () => {
        navLinks.classList.remove("active");
        overlay.classList.remove("active");
    };
});
