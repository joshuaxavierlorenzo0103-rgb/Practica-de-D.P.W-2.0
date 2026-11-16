const botonFamilia = document.getElementById('btn-familia');

if (botonFamilia) {
  botonFamilia.addEventListener('click', function (event) {
    event.preventDefault();

    botonFamilia.classList.add('boton-activo');
    botonFamilia.textContent = '¡Familia unida!';

    setTimeout(() => {
      botonFamilia.textContent = 'Conocer más';
      botonFamilia.classList.remove('boton-activo');
      document.getElementById('familia').scrollIntoView({ behavior: 'smooth' });
    }, 1200);
  });
}
