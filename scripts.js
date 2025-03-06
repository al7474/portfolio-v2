// Agregar un efecto al hacer scroll en la navegación
document.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.backgroundColor = "#222";
  } else {
    header.style.backgroundColor = "#111";
  }
});
