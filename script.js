const delay = ms => new Promise(res => setTimeout(res, ms));

let startAnimation;

const titles = ["División Automotores",
  "División Productos especiales",
  "División Sellos Mecánicos",
  "División Industrial"];

const transformations = ['zoom-in-and-out',
  'zoom-out',
  'translate-y',
  'translate-x'];

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

const img_urls = ['assets/vehicle.jpg',
  'assets/franco_quimica_bidon.png',
  'assets/sellos_varios.jpg',
  'assets/industrial_bomb_background.png'];

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
  const pic = document.getElementById('card-img');
  const txt = document.getElementById('card-txt');
  const logo = txt.querySelector('img');
  pic.classList.replace('translate-x', 'fade-out');
  txt.classList.replace('slide-in', 'slide-out');
  await delay(300);
  const urlvalue = img_urls.shift();
  pic.src = urlvalue;
  img_urls.push(urlvalue);
  const h1value = titles.shift();
  const pvalue = descriptions.shift();
  txt.querySelector('h1').innerText = h1value;
  titles.push(h1value);
  pic.className = 'img-fluid card-img fade-out';
  await delay(300);
  pic.classList.replace('fade-out', 'fade-in');
  switch (h1value.length) {
    case 25: //División Sellos Mecánicos
      clearTimeout(startAnimation);
      pic.classList.replace('fade-in', 'translate-r');
      logo.src = "assets/Logomejorado.png";
      logo.hidden = false;
      startAnimation = setInterval(startXAxisTranslation, 3000, pic, division_sellos_mecanicos_urls);
      break;
    case 29: //Divisioń Productos Especiales
      clearTimeout(startAnimation);
      logo.src = 'assets/franco-quimica-logo-1.png';
      logo.hidden = false;
      pic.classList.replace('fade-in', 'zoom-in');
      clearTimeout(startAnimation);
      startAnimation = setInterval(startZoomInAndOut, 3000, pic, division_productos_especiales_urls);
      break;
    case 19: //División Industrial
      logo.hidden = true;
      // startZoomInAndOutAnimation(pic)
      pic.classList.replace('fade-in', 'zoom-in');
      clearTimeout(startAnimation);
      startAnimation = setInterval(startZoomInAndOut, 3000, pic, division_industrial_urls);
      break;
    default: //División Automotores
      clearTimeout(startAnimation);
      pic.classList.replace('fade-in', 'translate-r');
      startAnimation = setInterval(startXAxisTranslation, 3000, pic, division_automotores_urls);
      logo.hidden = true;
  }
  txt.querySelector('p').innerText = pvalue;
  descriptions.push(pvalue)
  txt.classList.replace('slide-out', 'slide-in');

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

let onAppear = [];

document.addEventListener("DOMContentLoaded", function () {
  onAppear = [].map.call(document.querySelectorAll(".infocard"), function (item) {
    return item;
  });
}, false);

window.addEventListener("scroll", function () {
  onAppear.forEach(function (elem) {
    var vwTop = window.pageYOffset;
    var vwBottom = (window.pageYOffset + window.innerHeight);
    var elemTop = elem.offsetTop;
    var elemHeight = elem.offsetHeight;

    if (vwBottom > elemTop && ((vwTop - elemHeight) < elemTop)) {
      elem.classList.replace("hide-left", "show-left");
      elem.classList.replace("hide-right", "show-right");
    } else {
      elem.classList.replace("show-left", "hide-left");
      elem.classList.replace("show-right", "hide-right");
    }
  });
}, false);

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

document.addEventListener("DOMContentLoaded", function () {
  onCardAppear = [].map.call(document.querySelectorAll(".next-btn"), function (item) {
    return item;
  });

  function nextSlide() {
    onCardAppear.forEach((elem) => {
      elem.click();
    })

  }
  nextSlide();

}, false);



window.onresize = function () {
  const img = Array.from(document.getElementById('mainCarousel').querySelectorAll('.carousel-item'));
  if (window.screen.width <= 768) {
    img.forEach((value, index) => {
      value.firstElementChild.src = main_carousel_squared_urls[index];
    });
  }
  else {
    img.forEach((value, index) => {
      value.firstElementChild.src = main_carousel_wide_urls[index];
    });
  }
}


