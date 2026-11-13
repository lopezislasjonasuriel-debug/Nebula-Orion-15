// NAVEGACIÓN ENTRE SECCIONES (INICIO / CUENTO / JUEGO)
function showSection(sectionId) {
  // 1. Ocultar todas las secciones
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.classList.remove('active-section');
  });

  // 2. Desactivar estilo en todos los botones de navegación
  const buttons = document.querySelectorAll('.nav-btn');
  buttons.forEach(button => {
    button.classList.remove('active');
  });

  // 3. Mostrar la sección seleccionada
  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.classList.add('active-section');
  }

  // 4. Activar el botón correspondiente
  event.currentTarget.classList.add('active');
}

// LÓGICA PARA INTEGRAR EL JUEGO POSTERIORMENTE
document.addEventListener('DOMContentLoaded', () => {
  console.log("Página cargada correctamente. Lista para recibir el cuento y el juego.");
  
  /* 
    ===============================================================
    ESPACIO RESERVADO PARA INICIALIZAR EL JUEGO (Phaser.js)
    ===============================================================
    Una vez que generen el código del juego con Phaser.js,
    pueden instanciarlo aquí dentro del contenedor '#phaser-game'.
    
    Ejemplo de inicialización:
    
    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 400,
        parent: 'phaser-game',
        scene: { preload: preload, create: create, update: update }
    };
    const game = new Phaser.Game(config);
  */
});
