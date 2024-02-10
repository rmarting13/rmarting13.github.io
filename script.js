const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
const delay = ms => new Promise(res => setTimeout(res, ms));

let lowSizeFlag = false;
let highSizeFlag = true;

let startAnimation;
let onCardAppear;
let animation;
let cardsHover;


const titles = ["División Automotores",
  "División Productos especiales",
  "División Sellos Mecánicos",
  "División Industrial"];

const main_carousel_squared_urls = ['assets/nortebombas_logo_squared.png',
  'assets/collage.png',
  'assets/providers_squared.png'];

const main_carousel_wide_urls = ['assets/logo_background.png',
  'assets/background_collage.png',
  'assets/providers.png'];

const division_industrial_urls = ['assets/division_industrial/motor_reductor.jpeg',
  'assets/division_industrial/electrobomba.jpg',
  'assets/division_industrial/hidrolavadora.jpg',
  'assets/division_industrial/bomba_sumergible.jpeg',
  'assets/division_industrial/bombas-cloacales.jpg',
  'assets/division_industrial/motobomba.jpeg',
  'assets/division_industrial/bomba_desplazamiento_positivo.jpeg'];

const division_automotores_urls = [
  'assets/division_automotores/bomba_agricola.jpeg',
  'assets/division_automotores/bomba_autoelevador.jpeg',
  'assets/division_automotores/pump_img.png'
];

const division_productos_especiales_urls = [
  'assets/franco_quimica_bidon.png'
];

const division_sellos_mecanicos_urls = [
  'assets/sellos_varios.jpg'
];

const social_media_icon_on_urls = [
  'assets/social/whatsapp-logo-svgrepo-com.svg',
  'assets/social/instagram-1-svgrepo-com.svg',
  'assets/social/facebook-1-svgrepo-com.svg'
];

const social_media_icon_off_urls = [
  'assets/social/whatsapp-svgrepo-com-off.svg',
  'assets/social/instagram-1-svgrepo-com-off.svg',
  'assets/social/facebook-1-svgrepo-com-off.svg'
];

const descriptions = ['Venta y reparación de Bombas de Automotor, línea agrícolas, (liviana y pesada), camionetas, \
                        tractores, generadores, auto elevadores, nacionales y importados (recambios con garantía).',
  'Somos representantes en la zona de Franco Química, empresa especialista en el diseño,\
                        desarrollo, elaboración y comercialización de productos químicos para el mantenimiento \
                        industrial y sanitario, en procesos productivos y el saneamiento industrial.',
  'Somos representantes en la zona de Intechseal, empresa especialista dedicada a la \
                        comercialización de sellos mecánicos, dispositivos que permiten el sellado de fluidos \
                        en equipos rotantes para la industrial.',
  'Venta y reparación de Motores, Reductores, Electrobombas, Hidrolavadoras, Bombas \
                        Sumergibles, bombas cloacales, Moto Bombas, Bombas de desplazamiento positivo (Pistón y \
                        engranaje)'];

const html_l = `<div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <strong>SALON COMERCIAL</strong>
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <div id="carouselStoreFade" class="carousel slide carousel-fade top-card-img">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="assets/premise_new.png" class="d-block w-100 img-fluid alt=" ...">
                          </div>
                          <div class="carousel-item active">
                            <img src="assets/nortebombas_store_960x465.png" class="d-block w-100 img-fluid alt=" ...">
                          </div>
                          <button class="carousel-control-prev" type="button" data-bs-target="#carouselJobsFade" data-bs-slide="prev"
                            hidden>
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Previous</span>
                          </button>
                          <button class="carousel-control-next" type="button" data-bs-target="#carouselStoreFade"
                            data-bs-slide="next" id='next-btn' hidden>
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Next</span>
                          </button>
                        </div>
                    </div>
                      <p class="fs-7 txt-card-body">
                        Bombas nuevas y recambios línea agrícola<br>
                          Juegos de reparación<br>
                          Rodamientos – Retenes - Oring<br>
                          Empaquetaduras - Sellos mecánicos<br>
                          Impulsores (plásticos – Bronce)<br>
                          Capacitores - Ventiladores plásticos - Borneras<br>
                          Manchones de Acoples Elásticos<br>
                          Sistema de tratamiento de agua para piletas - Ionizadores<br>
                          Desengrasante Industrial - Solvente Dieléctrico – otras aplicaciones
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <strong>TALLER ESPECIALIZADO </strong>
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <img src="assets/taller_960x465.png" class="img-fluid top-card-img" alt="...">
                      <p class="fs-7 txt-card-body">
                        Reparación de motores eléctricos<br>
                        Reparación de Bombas Centrifugas ejes libre<br>
                        Reparación de Electrobombas<br>
                        Reparación de Moto-reductores<br>
                        Reparación de Sellos mecánicos<br>
                    </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      <strong>INGENIERIA</strong>
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <img src="assets/mantenimiento_960x465.png" class="img-fluid top-card-img" alt="...">
                      <p class="fs-7 txt-card-body">
                        Asesoramiento en técnicas de mantenimiento<br>
                          Diagnostico de equipos con inspecciones preventivas y predictivas<br>
                          Asistencias en campos para desmontar – Montar equipos rotantes<br>
                          Asesoramiento en seguridad en equipos rotantes<br>
                          Capacitaciones<br>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      <strong>INTECHSEAL</strong>
                    </button>
                  </h2>
                  <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <img src="assets/Logomejorado.png" class="img-fluid top-card-img" alt="...">
                      <p class="fs-7 txt-card-body">
                        INTECH SEAL cuenta con una sumatoria de más de 30 años de experiencia en el mercado de sellos mecánicos.
                          Posee un centro de servicios integral, equipado con maquinarias de última generación, que permiten reparar todo tipo de sellos
                          mecánicos, asegurando la calidad y una marcada reducción en los costos asumidos. Así mismo se cuenta con un área de
                          mecanizado, para la producción de piezas metálicas.
                          Se realiza la conversión de equipos empaquetados a sistemas de sello mecánico.
                          Se asesora en la selección del sistema de sellado más propicio para la aplicación, contando con toda la gama de productos para
                          tal fin.
                      </p>
                    </div>
                  </div>
                </div>
                </div>`

const html_h = ` <div class="card card-translucid col-sm-12 col-md-6 col-lg-3 col-xl-3" style="--bs-card-bg: none"
onmouseover='openCard(this)' onmouseout="closeCard(this)">
  <!-- <img src="assets/nortebombas_store_960x465.png" class="img-fluid" alt="..."> -->
  <div id="carouselStoreFade" class="carousel slide carousel-fade top-card-img" hidden>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="assets/premise_new.png" class="d-block w-100 img-fluid alt=" ...">
        </div>
        <div class="carousel-item active">
          <img src="assets/nortebombas_store_960x465.png" class="d-block w-100 img-fluid alt=" ...">
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselJobsFade" data-bs-slide="prev"
          hidden>
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselStoreFade"
          data-bs-slide="next" id='next-btn' hidden>
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
      </div>
  </div>
  <div class="card-body" style="background: none;">
    <div class="card-header">
      <h4 class="card-title display-8">SALON COMERCIAL</h4>
    </div>
    <p class="fs-7 txt-card-body"  hidden>
      Bombas nuevas y recambios línea agrícola<br>
        Juegos de reparación<br>
        Rodamientos – Retenes - Oring<br>
        Empaquetaduras - Sellos mecánicos<br>
        Impulsores (plásticos – Bronce)<br>
        Capacitores - Ventiladores plásticos - Borneras<br>
        Manchones de Acoples Elásticos<br>
        Sistema de tratamiento de agua para piletas - Ionizadores<br>
        Desengrasante Industrial - Solvente Dieléctrico – otras aplicaciones
    </p>
  </div>
</div>
<div class="card card-translucid col-sm-12 col-md-6 col-lg-3 col-xl-3" style="--bs-card-bg: none"
onmouseover='openCard(this)' onmouseout="closeCard(this)">
  <img src="assets/taller_960x465.png" class="img-fluid top-card-img" alt="..." hidden>
  <div class="card-body">
    <div class="card-header">
      <h4 class="card-title display-8">TALLER ESPECIALIZADO</h4>
    </div>
    <p class="fs-7 txt-card-body" hidden>
        Reparación de motores eléctricos<br>
        Reparación de Bombas Centrifugas ejes libre<br>
        Reparación de Electrobombas<br>
        Reparación de Moto-reductores<br>
        Reparación de Sellos mecánicos<br>
    </p>
  </div>
</div>
<div class="card card-translucid col-sm-12 col-md-6 col-lg-3 col-xl-3" style="--bs-card-bg: none"
onmouseover='openCard(this)' onmouseout="closeCard(this)">
  <img src="assets/mantenimiento_960x465.png" class="img-fluid top-card-img" alt="..." hidden>
  <div class="card-body">
    <div class="card-header">
      <h4 class="card-title display-8">INGENIERIA</h4>
    </div>
    <p class="fs-7 txt-card-body" hidden>
      Asesoramiento en técnicas de mantenimiento<br>
        Diagnostico de equipos con inspecciones preventivas y predictivas<br>
        Asistencias en campos para desmontar – Montar equipos rotantes<br>
        Asesoramiento en seguridad en equipos rotantes<br>
        Capacitaciones<br>
    </p>
  </div>
</div>
<div class="card card-translucid col-sm-12 col-md-6 col-lg-3 col-xl-3" style="--bs-card-bg: none"
onmouseover='openCard(this)' onmouseout="closeCard(this)">
  <img src="assets/Logomejorado.png" class="img-fluid top-card-img" alt="..." hidden>
  <div class="card-body">
    <div class="card-header">
      <h4 class="card-title display-8">INTECHSEAL</h4>
    </div>
    <p class="fs-7 txt-card-body" hidden>
      INTECH SEAL cuenta con una sumatoria de más de 30 años de experiencia en el mercado de sellos mecánicos.
        Posee un centro de servicios integral, equipado con maquinarias de última generación, que permiten reparar todo tipo de sellos
        mecánicos, asegurando la calidad y una marcada reducción en los costos asumidos. Así mismo se cuenta con un área de
        mecanizado, para la producción de piezas metálicas.
        Se realiza la conversión de equipos empaquetados a sistemas de sello mecánico.
        Se asesora en la selección del sistema de sellado más propicio para la aplicación, contando con toda la gama de productos para
        tal fin.
    </p>
  </div>
</div>`

// const img_urls = ['assets/vehicle.jpg',
//   'assets/franco_quimica_bidon.png',
//   'assets/sellos_varios.jpg',
//   'assets/industrial_bomb_background.png'];

// const Sort = {
//   bubbleSort() {
//     const timer = (ms) => new Promise((res) => setTimeout(res, ms));

//     async function sort(self) {
//       for (let i = 0; i <= 100; i++) {
//         if (self.abort) {
//           self.abort = false;
//           return;
//         }
//         console.log(i);
//         await timer(1000);
//       }
//     }

//     sort(this);
//   },

//   bubbleSortStop() {
//     this.abort = true;
//   }
// };

// document.getElementById("sort")
//   .addEventListener("click", Sort.bubbleSort.bind(Sort));

// document.getElementById("random-data")
//   .addEventListener("click", Sort.bubbleSortStop.bind(Sort));

function startXAxisTranslation(elem, list) {
  if(list){
    let url = list.shift();
    elem.src = url;
    list.push(url);
  }
  elem.classList.toggle('translate-r');
  elem.classList.toggle('translate-l');
}

function startYAxisTranslation(elem, list) {
  if(list){
    let url = list.shift();
    elem.src = url;
    list.push(url);
  }
  elem.classList.toggle('translate-up');
  elem.classList.toggle('translate-down');
}

// async function startZoomInAndOutAnimation(elem) {
//   await delay(1000);
//   elem.classList.replace('fade-in', 'zoom-in');
//   for(url of division_industrial_urls) {
//     elem.src = url;
//     elem.classList.toggle('zoom-in');
//     elem.classList.toggle('zoom-out');
//     await delay(3000);
//   }
// }


function startZoomInAndOut(elem, list) {
    if(list){
      let url = list.shift();
      elem.src = url;
      list.push(url);
    }
    elem.classList.toggle('zoom-in');
    elem.classList.toggle('zoom-out');
}

function startYAxisTranslation(elem) {
  let url = division_industrial_urls.shift();
  elem.src = url;
  division_industrial_urls.push(url);
  elem.classList.toggle('translate-up');
  elem.classList.toggle('translate-down');
}

  // elem.classList.replace('fade-in', 'zoom-in');
  // elem.src = 
  // await delay(3000);
  // elem.classList.replace('zoom-in', 'zoom-out');
  // elem.src = 
  // await delay(3000);
  // elem.classList.replace('zoom-out', 'zoom-in');
  // elem.src = 
  // await delay(3000);
  // elem.classList.replace('zoom-in', 'zoom-out');
  // elem.src = 
  // await delay(3000);
  // elem.classList.replace('zoom-out', 'zoom-in');
  // elem.src = 
  // await delay(3000);
  // elem.classList.replace('zoom-in', 'zoom-out');
  // elem.src = 
  // await delay(3000);
  // elem.classList.replace('zoom-out', 'zoom-in');
  // elem.src = 
// }

//Launches swap animations when pressing the next button at "Divisiones" card container
document.getElementById("btn-next").addEventListener("click", async (event) => {
  const pic_container = document.querySelector('.img-container');
  const pic = document.getElementById('card-img');
  const txt = document.getElementById('card-txt');
  const logo = txt.querySelector('img');
  txt.classList.replace('slide-in', 'slide-out');
  pic_container.classList.replace('show-left', 'slide-left');
  await delay(300);
  let urlvalue = '';
  const h1value = titles.shift();
  const pvalue = descriptions.shift();
  txt.querySelector('h1').innerText = h1value;
  titles.push(h1value);
  switch (h1value.length) {
    case 19: //División Industrial
      clearTimeout(startAnimation);  
      logo.hidden = true;
      pic.classList.remove('translate-r', 'translate-l');
      urlvalue = division_industrial_urls.shift();
      pic.src = urlvalue;
      division_industrial_urls.push(urlvalue);
      pic.classList.add('zoom-out');
      startAnimation = setInterval(startZoomInAndOut, 3000, pic, division_industrial_urls);
      break;
    case 20://División Automotores
      clearTimeout(startAnimation);
      pic.classList.remove('zoom-out', 'zoom-in');
      urlvalue = division_automotores_urls.shift();
      pic.src = urlvalue;
      division_automotores_urls.push(urlvalue);
      // pic.classList.add('translate-l');
      // startAnimation = setInterval(startXAxisTranslation, 3000, pic, division_automotores_urls);
      pic.classList.add('translate-up');
      startAnimation = setInterval(startYAxisTranslation, 3000, pic, division_automotores_urls);
      logo.hidden = true;
      break;
    case 29: //Divisioń Productos Especiales
      clearTimeout(startAnimation);
      pic.classList.remove('translate-up', 'translate-down');
      logo.src = 'assets/franco-quimica-logo-1.png';
      logo.hidden = false;
      pic.src = division_productos_especiales_urls[0];
      pic.classList.add('zoom-out');
      clearTimeout(startAnimation);
      startAnimation = setInterval(startZoomInAndOut, 3000, pic, division_productos_especiales_urls);
      break;
    default://División Sellos Mecánicos
      clearTimeout(startAnimation);
      pic.classList.remove('zoom-in', 'zoom-out');
      logo.src = "assets/Logomejorado.png";
      logo.hidden = false;
      pic.src = division_sellos_mecanicos_urls[0];
      pic.classList.add('translate-l');
      startAnimation = setInterval(startXAxisTranslation, 3000, pic, division_sellos_mecanicos_urls);
  }
  txt.querySelector('p').innerText = pvalue;
  descriptions.push(pvalue)
  txt.classList.replace('slide-out', 'slide-in');
  pic_container.classList.replace('slide-left', 'show-left');

});



// document.addEventListener('scroll', function (e) {
//     const scrollpos = window.scrollY; // window scroll position
//     const wh = window.innerHeight-50; // as soon as element touches bottom with offset event starts
//     const element = document.querySelector("#card-1"); //element

//     window.addEventListener('scroll', function(){ 
//         if(scrollpos > (element.offsetTop - wh)){
//             element.classList.replace('hide-left', 'show-left');
//         }
//         else {
//             element.classList.replace('show-left', 'hide-left');
//         }
//     });
//   });

// const startAnimation = (entries, observer) => {
//     entries.forEach(entry => {
//       entry.target.classList.toggle("show-left", entry.isIntersecting);
//     });
//   };

//   const observer = new IntersectionObserver(startAnimation);
//   const options = { root: null, rootMargin: '0px', threshold: 1 }; 

//   const elements = document.querySelectorAll('.card');
//   elements.forEach(el => {
//     observer.observe(el, options);
//   });

// let onAppear = [];

// document.addEventListener("DOMContentLoaded", function () {
//   onAppear = [].map.call(document.querySelectorAll(".infocard"), function (item) {
//     return item;
//   });
// }, false);
// SLIDES CARDS FROM OUTSIDE TO INSIDE WHILE USER SCROLLS THE PAGE:
// window.addEventListener("scroll", function () {
//   onAppear.forEach(function (elem) {
//     var vwTop = window.pageYOffset;
//     var vwBottom = (window.pageYOffset + window.innerHeight);
//     var elemTop = elem.offsetTop;
//     var elemHeight = elem.offsetHeight;

//     if (vwBottom > elemTop && ((vwTop - elemHeight) < elemTop)) {
//       elem.classList.replace("hide-left", "show-left");
//       elem.classList.replace("hide-right", "show-right");
//     } else {
//       elem.classList.replace("show-left", "hide-left");
//       elem.classList.replace("show-right", "hide-right");
//     }
//   });
// }, false);

// VERY USEFUL TO SLIDE IMAGES
// addEventListener("load",() => { // "load" is safe but "DOMContentLoaded" starts earlier
//   var index = 0;
//   const slides = document.querySelectorAll(".slides");
//   const classHide = "slides-hidden", count = slides.length;
//   nextSlide();
//   function nextSlide() {
//       slides[(index ++) % count].classList.add(classHide);
//       slides[index % count].classList.remove(classHide);
//       setTimeout(nextSlide, 3000);
//   }
// });


function openCard(elem) {
  elem.querySelector('.top-card-img').hidden = false;
  elem.querySelector('.txt-card-body').hidden = false;
  animation = setInterval(() => {
    elem.querySelector('#next-btn').click();
  }, 3000);  
}

function closeCard(elem) {
  elem.querySelector('.top-card-img').hidden = true;
  elem.querySelector('.txt-card-body').hidden = true;
  clearInterval(animation);
}

//Change size format of carousel from 16:9 to 4:3
function setDefaultContent(){
  let icon_url;
  const img = Array.from(document.getElementById('mainCarousel').querySelectorAll('.carousel-item'));
  const txt = document.getElementById('division-txt');
  const replaceHtml = document.querySelector('#bg-info-cards-container');
  const header1 = document.getElementById('header-1');
  const icons = document.querySelectorAll('.social-media-link');
  if (window.screen.width <= 768 && !lowSizeFlag) {
    img.forEach((value, index) => {
      value.firstElementChild.src = main_carousel_squared_urls[index];
      txt.classList.replace('fs-5','fs-6');
    });
    header1.firstElementChild.classList.replace('display-6', 'fs-4');
    replaceHtml.innerHTML = html_l;
    icons.forEach((elem)=>{
      icon_url = social_media_icon_on_urls.shift();
      elem.firstElementChild.src = icon_url;
      social_media_icon_on_urls.push(icon_url);
    });
    lowSizeFlag = true;
    highSizeFlag = false;
  }
  else if(window.screen.width > 768 && !highSizeFlag) {
    img.forEach((value, index) => {
      value.firstElementChild.src = main_carousel_wide_urls[index];
      txt.classList.replace('fs-6','fs-5');
    });
    header1.firstElementChild.classList.replace('fs-4', 'display-6');
    replaceHtml.innerHTML = html_h;
    icons.forEach((elem)=>{
      icon_url = social_media_icon_off_urls.shift();
      elem.firstElementChild.src = icon_url;
      social_media_icon_off_urls.push(icon_url);
    });
    highSizeFlag = true;
    lowSizeFlag = false;
  }
}

window.onresize = setDefaultContent;

document.addEventListener("DOMContentLoaded", function () {
  onCardAppear = [].map.call(document.querySelectorAll(".next-btn"), function (item) {
    return item;
  });

  setDefaultContent();

  // cardsHover = [].map.call(document.querySelectorAll(".next-btn"), function (item) {
  //   return item;
  // });

  function nextSlide() {
    onCardAppear.forEach((elem) => {
      elem.click();
    })

  }
  setInterval(nextSlide, 3000);


}, false);


