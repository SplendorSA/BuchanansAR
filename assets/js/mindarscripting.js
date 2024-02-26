// Función de creación, aparición y eventos de los botones
const showInfo = () => {
    
    // Variables de Botones
    let y = 0;
    
    const jrigButton = document.querySelector("#jrig-button");
    const buchaigButton = document.querySelector("#buchaig-button");
    const regisForm = document.querySelector("#IMG-Preview-button");

    const formGoogle = document.querySelector("#form-overlay");

    // const text = document.querySelector("#text");

    // Tiempo en el que aprecerán los botones luego de que el primero aparezca
    jrigButton.setAttribute("visible", true);
    setTimeout(() => {
      buchaigButton.setAttribute("visible", true);
    }, 300);

    // Eventos de los botones (Cuando son clickeados)
    let currentTab = '';
    jrigButton.addEventListener('click', function (evt) {
      console.log("JRIG");
      window.open("https://www.instagram.com/jrlicoresjunior/");
      currentTab = 'JRIG';
    });
    buchaigButton.addEventListener('click', function (evt) {
      console.log("Buchanan's IG");
      window.open("https://www.instagram.com/buchanans_col/");
      currentTab = 'buchaig';
    });
    regisForm.addEventListener('click', function (evt) {
      console.log("Registro");
      formGoogle.style.display = "";
      currentTab = 'registro';
    });

  }

  // Función de creación
  const showPromo = (done) => {
    const promo = document.querySelector("#promo-panel");
    const promo2 = document.querySelector("#promo-panel2");
    const promo3 = document.querySelector("#promo-panel3");

    const promoLeftButton = document.querySelector("#promo-left-button");
    const promoRightButton = document.querySelector("#promo-right-button");

    const paintandquestPreviewButton2 = document.querySelector("#IMG-Preview-button2");
    const paintandquestPreviewButton3 = document.querySelector("#IMG-Preview-button3");


    let y = 0;
    let currentItem = 0;

    // Visibilidad del panel
    promo.setAttribute("visible", true);
    promo2.setAttribute("visible", true);
    promo3.setAttribute("visible", true);


    // Mustra la Promo con las imagenes en la parte superior
    const showPromoItem = (item) => {
      for (let i = 0; i <= 2; i++) {
        document.querySelector("#promo-item" + i).setAttribute("visible", i === item);
      }
    }

    // Hace visible los botones
    const id = setInterval(() => {
      
      y += 0.008;

      if (y >= 0.6) {

        paintandquestPreviewButton2.addEventListener('click', () => {
          paintandquestPreviewButton2.setAttribute("visible", false);
          const testVideo = document.createElement( "video" );
          const canplayWebm = testVideo.canPlayType( 'video/webm; codecs="vp8, vorbis"' );
          if (canplayWebm == "") {
            document.querySelector("#paintandquest-video-link2").setAttribute("visible", true);
            document.querySelector("#paintandquest-video-link2").setAttribute("src", "#videoPromoMp4");
            document.querySelector("#videoPromoMp4").play();
          } else {
            document.querySelector("#paintandquest-video-link2").setAttribute("visible", true);
            document.querySelector("#paintandquest-video-link2").setAttribute("src", "#videoPromoWebM");
            document.querySelector("#videoPromoWebM").play();
          }
        });

        paintandquestPreviewButton3.addEventListener('click', () => {
          paintandquestPreviewButton3.setAttribute("visible", false);
          const testVideo = document.createElement( "video" );
          const canplayWebm = testVideo.canPlayType( 'video/webm; codecs="vp8, vorbis"' );
          if (canplayWebm == "") {
            document.querySelector("#paintandquest-video-link3").setAttribute("visible", true);
            document.querySelector("#paintandquest-video-link3").setAttribute("src", "#videoPromoMp4");
            document.querySelector("#videoPromoMp4").play();
          } else {
            document.querySelector("#paintandquest-video-link3").setAttribute("visible", true);
            document.querySelector("#paintandquest-video-link3").setAttribute("src", "#videoPromoWebM");
            document.querySelector("#videoPromoWebM").play();
          }
        });
        
        y=0.6;

      }
      
      promo.setAttribute("position", "0 " + y + " -0.01");
      promo2.setAttribute("position", ".915 " + y + " .255");
      promo3.setAttribute("position", "-.915 " + y + " .255");

    }, 30);
  }

  var botella = document.querySelector('#avatar');
  //Eventos al registrar el Target
  AFRAME.registerComponent('mytarget', {

    //Se inicia esta función cuando el Target es encontrado
    init: function () {

      // Hace la lectura de la señal de que el Target fue encontrado
      this.el.addEventListener('targetFound', event => {

        // Avisa en la consola que el Target fue encontrado
        console.log("Target Found");

        // Se pone un TimeOut de 500 milisegundos para que empiece con la siguiente función
        setTimeout(() => {
         
          document.querySelector("#avatar").setAttribute("animation-mixer", "loop:once; clampWhenFinished: true;");
          
          setTimeout(() => {
            
            showPromo();
            showInfo();
            
          },3000);

        }, 3000);

      });

      // Hace la lectura de la señal de que el Target se perdió
      this.el.addEventListener('targetLost', event => {

        //Avisa en la consola que el Target se perdió
        console.log("Target Lost");

      });

      const videoVolMp4 = document.querySelector("#videoPromoMp4");
      const videoVolWebM = document.querySelector("#videoPromoWebM");
      videoVolMp4.volume = 0.2;
      videoVolWebM.volume = 0.2;
    }


  });
