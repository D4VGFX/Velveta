console.log("Script Velveta caricato correttamente");
let current = 0;
const images = document.querySelectorAll('.carousel-img');

function changeImage() {
  images[current].classList.remove('active');
  current = (current + 1) % images.length;
  images[current].classList.add('active');
}

setInterval(changeImage, 3000); // Cambia immagine ogni 3 secondi