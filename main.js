window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var backgroundColor;

    // Definir los colores de fondo según la posición de desplazamiento
    if (scrollPosition < 500) {
      backgroundColor = 'blue';
    } else if (scrollPosition < 1000) {
      backgroundColor = 'green';
    } else {
      backgroundColor = 'red';
    }

    // Aplicar el color de fondo al elemento con la clase "content"
    document.querySelector('.content').style.backgroundColor = backgroundColor;
  });
