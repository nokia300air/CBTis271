// assets/script.js
/* ===================================================
   Funciones básicas de UX
   =================================================== */

// Año dinámico en el footer
document.getElementById('year').textContent = new Date().getFullYear();

/* Validación sencilla del formulario (HTML5 ya cubre mucho)   */
const form = document.querySelector('.contact-form');

form.addEventListener('submit', e => {
  if (!form.checkValidity()) {
    e.preventDefault();
    alert('Por favor, completa correctamente todos los campos obligatorios.');
  }
});
