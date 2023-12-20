let arSystem;
            
document.addEventListener("DOMContentLoaded", function() {
              
    var popupImg = document.getElementById("img-overlay");
              
    const sceneEl = document.querySelector('a-scene');
    sceneEl.addEventListener('loaded', function () {
        arSystem = sceneEl.systems["mindar-image-system"];
    });

    sceneEl.addEventListener("arReady", (event) => {
        console.log("MindAR is ready");
        popupImg.style.display = "none";
    });

    // Variables del pop-up
    var popupVideo = document.getElementById("video-overlay");
    var popupVideoContent = document.querySelector("popupVideo-content");
    var closeBtn = document.getElementById("close-btn");
    var videoPlayer = document.getElementById("intro-video");

    // Agrega un controlador de eventos para cerrar el pop-up al hacer clic en el botón de cerrar
    closeBtn.addEventListener("click", function() {
        videoPlayer.pause();
        popupVideo.style.display = "none";
        popupImg.style.display= "";
        arSystem.start();
    });
      
    // Agrega un controlador de eventos para cerrar el pop-up al hacer clic fuera de la imagen
    window.addEventListener("click", function(event) {
        if (event.target === popupVideo) {
            videoPlayer.pause();
            popupVideo.style.display = "none";
            popupImg.style.display= "";
            arSystem.start();
        }
    });
      
    // Evita que los clics dentro del contenido del popupVideo cierren el popupVideo
    if (popupVideoContent) {
        popupVideoContent.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    }
});
      
// Oculta el video al terminar de reproducir
function showExampleContainer() {

    // Variables del autocerrado
    const autoPauseVideoPlayer = document.getElementById("intro-video");
    const autoCloseVideoPopUp = document.getElementById("video-overlay");
    const autoClosePlayerVideo = document.getElementById("contenedor-Vid");
    const autoDisplayImg = document.getElementById("img-overlay");

    autoPauseVideoPlayer.pause();
    autoCloseVideoPopUp.style.display="none";
    autoDisplayImg.style.display= "";
    arSystem.start();
                
}