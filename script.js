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
  