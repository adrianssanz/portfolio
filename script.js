document.getElementById('ver-mas').addEventListener('click', function(e) {
  e.preventDefault();
  
  var oculto = document.getElementById('vermas');

  if (oculto.classList.contains('ocultar')) {
      oculto.classList.remove('ocultar');
      oculto.classList.add('mostrar');
      this.textContent = "Ver menos";
  } else {
      oculto.classList.remove('mostrar');
      oculto.classList.add('ocultar');
      this.textContent = "Ver más";
  }
});

const botonFlecha = document.getElementById('volverArriba');

window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      botonFlecha.classList.add('show');
  } else {
      botonFlecha.classList.remove('show');
  }
};

botonFlecha.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};