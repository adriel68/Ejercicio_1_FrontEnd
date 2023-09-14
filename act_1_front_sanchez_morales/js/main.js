
console.log('Hola mundo!');


function mostrarMensajeInicial() {

  if (confirm('que onda como andas')) {
    alert('este sitio web esta en constante mejora, si ves bugs ya sabes jeje');
  } else {
    alert('...');
  }

}

document.addEventListener("DOMContentLoaded", () => {

  const scrollToBottomButtom = document.getElementById('btn-ir-arriba');

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      scrollToBottomButtom.style.display = 'block';
    } else {
      scrollToBottomButtom.style.display = 'none';
    }
  });

  scrollToBottomButtom.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
    });
  });

});

const galeriaImagenes = document.querySelectorAll('.galeria-img');
const overlay = document.querySelector('.galeria-overlay');
const overlayImagen = document.querySelector('.galeria-overlay-img');

galeriaImagenes.forEach(imagen => {

  imagen.addEventListener('click', () => {
    overlayImagen.src = imagen.src;
    overlay.style.display = 'flex';
  });

});

overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
  overlayImagen.src = '';
});


const contactoForm = document.getElementById('contacto-form');

contactoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  alert('gracias por contactarnos jaja yipee! - un saludo, ' + nombre + '- tu correo es: ' + email + '- y tu mensaje es: ' + mensaje);

  contactoForm.reset();
});
