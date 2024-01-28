const delay = ms => new Promise(res => setTimeout(res, ms));

const titles = ["División Automotores",
                "División Productos especiales",
                "División Sellos Mecánicos",
                "División Industrial"];

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
                    'assets/agricola.jpeg',
                    'assets/mechanical_seal.jpeg',
                    'assets/industrial_bomb_background.png'];

document.getElementById("btn-next").addEventListener("click", async (event) => {
    const pic = document.getElementById('card-img');
    const txt = document.getElementById('card-txt');
    const logo = txt.querySelector('img');
    pic.classList.replace('fade-in', 'fade-out');
    txt.classList.replace('slide-in', 'slide-out');
    await delay(300);
    const urlvalue = img_urls.shift();
    pic.src=urlvalue;
    img_urls.push(urlvalue);
    const h1value = titles.shift();
    const pvalue = descriptions.shift();
    txt.querySelector('h1').innerText = h1value;
    titles.push(h1value);
    if(h1value.length == 25) {
      logo.hidden = false;
    }
    else {
      logo.hidden = true;
    }
    txt.querySelector('p').innerText = pvalue;
    descriptions.push(pvalue)
    pic.classList.replace('fade-out', 'fade-in');
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

document.addEventListener("DOMContentLoaded", function() {
  onAppear = [].map.call(document.querySelectorAll(".infocard"), function(item ) {
    return item;
  });
}, false);

window.addEventListener("scroll", function() {
  onAppear.forEach(function(elem) {
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

document.addEventListener("DOMContentLoaded", function() {
  onCardAppear = [].map.call(document.querySelectorAll(".next-btn"), function(item ) {
    return item;
  });

  function nextSlide() {
    onCardAppear.forEach((elem)=>{
      elem.click();
    })
  setTimeout(nextSlide, 3000);
  }
  nextSlide();

}, false);







