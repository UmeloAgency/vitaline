var $statusActive = $('.slider__count_active');
var $statusTotal = $('.slider__count_total');

$('#slider-banner').on('beforeChange', function (a, b, c, nextSlide) {
  $statusActive.text('0' + ((nextSlide ? nextSlide : 0) + 1));
});

$('#slider-banner').on('init reinit', function (e, slick) {
  $statusTotal.text('0' + slick.slideCount);
});
