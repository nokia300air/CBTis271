// assets/script.js
/* Año automático en el footer */
document.getElementById('year').textContent = new Date().getFullYear();

/* Validación rápida de formulario (si llegas a agregar uno) */
const form=document.querySelector('.contact-form');
if(form){
  form.addEventListener('submit',e=>{
    if(!form.checkValidity()){
      e.preventDefault();
      alert('Por favor, completa correctamente todos los campos obligatorios.');
    }
  });
}

/* Smooth-scroll fallback para navegadores antiguos */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const t=document.querySelector(a.getAttribute('href'));
    if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'});}
  });
});
