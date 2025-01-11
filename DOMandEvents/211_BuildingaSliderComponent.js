//211. Building a Slider Component
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const maxSlide = slides.length - 1;

// slides.forEach((s, i) => (s.style.transform = `translateX(${i * 100}%)`));
// //0% 100% 200%

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide(0);

const nextSlide = function () {
  if (currentSlide === maxSlide) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
};

const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
};

const btnright = document.querySelector('.slider__btn--right');
const btnleft = document.querySelector('.slider__btn--left');
btnright.addEventListener('click', nextSlide);
btnleft.addEventListener('click', prevSlide);
