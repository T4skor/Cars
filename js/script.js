// Modo oscuro toggle (si tienes botón)
const btn = document.getElementById("modo-toggle");
if (btn) {
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    btn.textContent = document.body.classList.contains("dark-mode")
      ? "🌙 Modo Claro"
      : "🌑 Modo Oscuro";
  });
}

// Galería con fade
let current = 0;
const images = document.querySelectorAll('.slider-images img');
const total = images.length;

function showNextImage() {
  images[current].classList.remove('active');
  current = (current + 1) % total;
  images[current].classList.add('active');
}

images[current].classList.add('active');
setInterval(showNextImage, 5000);
