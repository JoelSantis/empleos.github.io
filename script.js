
// Script básico para alertas de formularios (opcional)
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Gracias por enviar tu información.');
    form.reset();
  });
});
