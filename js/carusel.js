// // ДОКТОР
const docSlider = document.getElementById('slider-doc');
const docBtnNext = document.getElementById('slider-right-doc');
const docBtnPrev = document.getElementById('slider-left-doc');

initCarusel(docSlider, docBtnNext, docBtnPrev);

// ОТЗИВИ
const reviewsSlider = document.getElementById('slider-reviews');
const reviewsBtnNext = document.getElementById('slider-right-reviews');
const reviewsBtnPrev = document.getElementById('slider-left-reviews');

initCarusel(reviewsSlider, reviewsBtnNext, reviewsBtnPrev);

// ПОРТФОЛІО
const portfolioSlider = document.getElementById('slider-portfolio');
const portfolioBtnNext = document.getElementById('slider-right-portfolio');
const portfolioBtnPrev = document.getElementById('slider-left-portfolio');

initCarusel(portfolioSlider, portfolioBtnNext, portfolioBtnPrev);

//  ФУНКЦИЇ

function initCarusel(slider, btnNext, btnPrev) {
  const sliderItems = Array.from(slider.children);

  sliderItems.forEach(function (slide, index) {
    slide.dataset.index = index;
    sliderItems[0].setAttribute('data-active', '');
  });

  btnNext.onclick = function () {
    showNextSlide('next', slider, sliderItems);
  };

  btnPrev.onclick = function () {
    showNextSlide('prev', slider, sliderItems);
  };
}

function showNextSlide(direction, slider, sliderItems) {
  const styleSlider = getComputedStyle(slider);
  const styleItem = getComputedStyle(sliderItems[0]);
  const itemWidth = +sliderItems[0].clientWidth;
  const itemMarginRight = +styleItem.marginRight.slice(0, -2);

  const currentSlide = slider.querySelector('[data-active]');
  const currentSlideIndex = +currentSlide.dataset.index;
  const currentStep = new WebKitCSSMatrix(styleSlider.transform).m41;
  const step = itemWidth + itemMarginRight;
  let nextSlideIndex;

  if (direction === 'prev' && currentSlideIndex === 0) return;

  currentSlide.removeAttribute('data-active');

  if (direction === 'next') {
    nextSlideIndex =
      currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
    slider.style.transform = `translateX(-${step * nextSlideIndex}px)`;
  }

  if (direction === 'prev') {
    nextSlideIndex =
      currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
    slider.style.transform = `translateX(${currentStep + step}px)`;
  }

  const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
  nextSlide.setAttribute('data-active', '');
}
