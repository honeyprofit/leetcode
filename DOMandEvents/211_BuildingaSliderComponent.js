//211. Building a Slider Component

const slider = function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const maxSlide = slides.length - 1;

  //dot slide
  const dotContainer = document.querySelector('.dots');
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  //activate dots
  const activateDots = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  // slides.forEach((s, i) => (s.style.transform = `translateX(${i * 100}%)`));
  // //0% 100% 200%

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (currentSlide === maxSlide) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    goToSlide(currentSlide);
    activateDots(currentSlide);
  };

  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide;
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide);
    activateDots(currentSlide);
  };

  //initialization
  const init = function () {
    goToSlide(0);
    createDots();
    activateDots(0);
  };
  init();

  //slide
  //button control
  const btnright = document.querySelector('.slider__btn--right');
  const btnleft = document.querySelector('.slider__btn--left');
  btnright.addEventListener('click', nextSlide);
  btnleft.addEventListener('click', prevSlide);

  //keyboard control
  document.addEventListener('keydown', function (e) {
    console.log(e);
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  //dot slide
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      console.log('DOT');
      // curSlide = Number(e.target.dataset.slide);
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDots(slide);
    }
  });
};

slider();
