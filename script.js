// Dark mode toggle
const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeBtn.textContent = document.body.classList.contains("dark")
        ? "☀️"
        : "🌙";
});

// Mobile menu toggle
function toggleMenu() {
    document.getElementById("nav-menu").classList.toggle("show");
}
