// Auto-carousel

const carousel = document.querySelector('.imgcarousel');
const images = carousel.querySelectorAll('img');

let currentIndex = 0;
let intervalId = null;

function animateCarousel() {
  intervalId = setInterval(() => {
    const imageWidth = images[0].offsetWidth;
    carousel.scrollLeft = currentIndex * imageWidth;
    currentIndex = (currentIndex + 1) % images.length;
  }, 2500); // change the interval time as needed
}

animateCarousel();
